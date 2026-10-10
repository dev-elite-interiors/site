import { NextResponse, type NextRequest } from "next/server";

const COOKIE_NAME = "de_admin_session";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info.develiteinteriors@gmail.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  const isAdminSubdomain = host.startsWith("admin.");
  const isAdminPath = pathname.startsWith("/admin") || isAdminSubdomain;
  const isLoginPage = pathname === "/admin/login" || (isAdminSubdomain && pathname === "/login");
  const isAuthApi = pathname.startsWith("/api/admin/auth");

  // If already authenticated and visiting login page, redirect to /admin
  if (isLoginPage) {
    const sessionCookie = request.cookies.get(COOKIE_NAME);
    if (sessionCookie && sessionCookie.value) {
      try {
        const decoded = JSON.parse(
          Buffer.from(sessionCookie.value, "base64").toString("utf-8")
        );
        if (decoded.email === ADMIN_EMAIL) {
          return NextResponse.redirect(new URL("/admin", request.url));
        }
      } catch {
        // Continue to login
      }
    }
    return NextResponse.next();
  }

  // Protect admin paths
  if (isAdminPath && !isAuthApi) {
    const sessionCookie = request.cookies.get(COOKIE_NAME);

    let isAuthenticated = false;
    if (sessionCookie && sessionCookie.value) {
      try {
        const decoded = JSON.parse(
          Buffer.from(sessionCookie.value, "base64").toString("utf-8")
        );
        if (decoded.email === ADMIN_EMAIL) {
          isAuthenticated = true;
        }
      } catch {
        isAuthenticated = false;
      }
    }

    if (!isAuthenticated) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Authenticated on admin subdomain accessing root -> rewrite to /admin
    if (isAdminSubdomain && pathname === "/") {
      return NextResponse.rewrite(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/((?!_next/static|_next/image|favicon.ico|products/|.*\\.(?:svg|png|jpg|jpeg|webp)$).*)",
  ],
};
