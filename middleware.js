import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log("Middleware: ", request.url)
  
    let pathname = request.nextUrl.pathname;
    console.log("nextUrl: ", request.nextUrl)
    console.log("path: ",pathname,"isFormPath: ",pathname.startsWith("/form"))
    let cookie = request.cookies.get("_ga_TPXW92CR4Y")
    console.log(cookie)

    let allCookies = request.cookies.getAll()
    console.log("all Cookies: ", allCookies)

    if(pathname.startsWith("/form")){
      let user = request.cookies.get("email")
      console.log("------------------login---------------")
      if(!user){
        console.log("user has")
        return NextResponse.redirect(new URL('/login', request.url))
      }
    }

    if(pathname.startsWith('/login')){
      let user = request.cookies.get("email")
      console.log("------------------login---------------")
      if(user){
        console.log("user has")
        return NextResponse.redirect(new URL('/', request.url))
      }
      console.log("login",user,"\n=================login end ========================")
    }
}   

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/form', "/", "/login"],
}