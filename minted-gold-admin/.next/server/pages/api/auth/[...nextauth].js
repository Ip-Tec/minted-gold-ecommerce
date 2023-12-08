"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_5__);\n// next-auth.js\n\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_5__.PrismaClient();\nconst adminEmails = [\n    \"peter@gmail.com\",\n    \"otakhorpeter@gmail.com\",\n    \"peterotakhor@gmail.com\",\n    \"peterotakhor2018@gmail.com\"\n];\nconst authOptions = {\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            timeout: 15000,\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                }\n            },\n            async authorize (credentials, req) {\n                console.log(\"Authorize credentials:\", credentials);\n                const adminData = await prisma.admin.findFirst({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (adminData && credentials?.email === adminData.email) {\n                    console.log(\"User is an admin:\", adminData);\n                    const admin = {\n                        id: adminData.id,\n                        name: adminData.name,\n                        email: adminData.email,\n                        username: adminData.username\n                    };\n                    // Return the user data to let NextAuth.js handle the session creation\n                    return Promise.resolve(admin);\n                } else {\n                    console.log(\"User is not an admin:\", adminData);\n                    // Returning null indicates authentication failure\n                    return Promise.resolve(null);\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_SECRET\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(prisma),\n    callbacks: {\n        async signIn (user, account, profile) {\n            console.log(\"Sign In:\", user);\n            return true;\n        },\n        async jwt (token, user) {\n            console.log(\"JWT:\", token);\n            console.log(\"User:\", user);\n            return token;\n        },\n        async session (session, token) {\n            console.log(\"Session:\", session);\n            // session.user = {\n            //   id: token.id,\n            //   name: token.name,\n            //   email: token.email,\n            //   username: token.username,\n            //   // Add other properties as needed\n            // };\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_4___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(req, res, authOptions);\n        console.log(\"isAdminRequest session:\", session);\n        // Uncomment the following lines if you want to restrict access to admins\n        if (!adminEmails.includes(session?.user?.email)) {\n            res.status(401).end();\n            throw new Error(\"User not authorized\");\n        }\n        return session;\n    // Continue with other logic for admin requests\n    } catch (error) {\n        console.error(\"isAdminRequest error:\", error);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFFbUQ7QUFDUjtBQUNGO0FBQ0E7QUFDRDtBQUNUO0FBRTlDLE1BQU1PLFNBQVMsSUFBSUQsd0RBQVlBO0FBRS9CLE1BQU1FLGNBQWM7SUFDbEI7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVNLE1BQU1DLGNBQWM7SUFDekJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNuQ0MsV0FBVztRQUNUWixpRUFBY0EsQ0FBQztZQUNiYSxTQUFTO1lBQ1RDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssU0FBUztZQUMvQkMsY0FBY1AsUUFBUUMsR0FBRyxDQUFDTyxhQUFhO1lBQ3ZDQyxlQUFlO2dCQUNiQyxRQUFRO29CQUNOQyxRQUFRO29CQUNSQyxhQUFhO29CQUNiQyxlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7UUFDQXJCLGlFQUFjQSxDQUFDO1lBQ2JhLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ2EsU0FBUztZQUMvQlAsY0FBY1AsUUFBUUMsR0FBRyxDQUFDYyxhQUFhO1FBQ3pDO1FBQ0ExQixzRUFBbUJBLENBQUM7WUFDbEIyQixhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO1lBQ3pDO1lBQ0EsTUFBTUMsV0FBVUosV0FBVyxFQUFFSyxHQUFHLEVBQUU7Z0JBQ2hDQyxRQUFRQyxHQUFHLENBQUMsMEJBQTBCUDtnQkFDdEMsTUFBTVEsWUFBWSxNQUFNNUIsT0FBTzZCLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO29CQUM3Q0MsT0FBTzt3QkFDTFYsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSU8sYUFBYVIsYUFBYUMsVUFBVU8sVUFBVVAsS0FBSyxFQUFFO29CQUN2REssUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkM7b0JBQ2pDLE1BQU1DLFFBQVE7d0JBQ1pHLElBQUlKLFVBQVVJLEVBQUU7d0JBQ2hCQyxNQUFNTCxVQUFVSyxJQUFJO3dCQUNwQlosT0FBT08sVUFBVVAsS0FBSzt3QkFDdEJhLFVBQVVOLFVBQVVNLFFBQVE7b0JBQzlCO29CQUVBLHNFQUFzRTtvQkFDdEUsT0FBT0MsUUFBUUMsT0FBTyxDQUFDUDtnQkFDekIsT0FBTztvQkFDTEgsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QkM7b0JBQ3JDLGtEQUFrRDtvQkFDbEQsT0FBT08sUUFBUUMsT0FBTyxDQUFDLElBQUk7Z0JBQzdCLENBQUM7WUFDSDtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsS0FBSztRQUNIcEMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ3JDO0lBQ0FrQyxTQUFTOUMsd0VBQWFBLENBQUNNO0lBQ3ZCeUMsV0FBVztRQUNULE1BQU1DLFFBQU9DLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7WUFDbkNuQixRQUFRQyxHQUFHLENBQUMsWUFBWWdCO1lBQ3hCLE9BQU8sSUFBSTtRQUNiO1FBQ0EsTUFBTUosS0FBSU8sS0FBSyxFQUFFSCxJQUFJLEVBQUU7WUFDckJqQixRQUFRQyxHQUFHLENBQUMsUUFBUW1CO1lBQ3BCcEIsUUFBUUMsR0FBRyxDQUFDLFNBQVNnQjtZQUNyQixPQUFPRztRQUNUO1FBQ0EsTUFBTVQsU0FBUUEsT0FBTyxFQUFFUyxLQUFLLEVBQUU7WUFDNUJwQixRQUFRQyxHQUFHLENBQUMsWUFBWVU7WUFDeEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLDhCQUE4QjtZQUM5QixzQ0FBc0M7WUFDdEMsS0FBSztZQUNMLE9BQU9BO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7QUFFRixpRUFBZXhDLGdEQUFRQSxDQUFDSyxZQUFZQSxFQUFDO0FBRTlCLGVBQWU2QyxlQUFldEIsR0FBRyxFQUFFdUIsR0FBRyxFQUFFO0lBQzdDLElBQUk7UUFDRixNQUFNWCxVQUFVLE1BQU12QywyREFBZ0JBLENBQUMyQixLQUFLdUIsS0FBSzlDO1FBQ2pEd0IsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQlU7UUFFdkMseUVBQXlFO1FBQ3pFLElBQUksQ0FBQ3BDLFlBQVlnRCxRQUFRLENBQUNaLFNBQVNNLE1BQU10QixRQUFRO1lBQy9DMkIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7WUFDbkIsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QjtRQUN6QyxDQUFDO1FBRUQsT0FBT2Y7SUFDUCwrQ0FBK0M7SUFDakQsRUFBRSxPQUFPZ0IsT0FBTztRQUNkM0IsUUFBUTJCLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDTCxJQUFJRSxNQUFNLENBQUMsS0FBS0ksSUFBSSxDQUFDO1lBQUVELE9BQU87UUFBd0I7SUFDeEQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWludGVkLWdvbGQtYWRtaW4vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC1hdXRoLmpzXHJcblxyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XHJcbmltcG9ydCBOZXh0QXV0aCwgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gIFwicGV0ZXJAZ21haWwuY29tXCIsXHJcbiAgXCJvdGFraG9ycGV0ZXJAZ21haWwuY29tXCIsXHJcbiAgXCJwZXRlcm90YWtob3JAZ21haWwuY29tXCIsXHJcbiAgXCJwZXRlcm90YWtob3IyMDE4QGdtYWlsLmNvbVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICB0aW1lb3V0OiAxNTAwMCxcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgICBhdXRob3JpemF0aW9uOiB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBwcm9tcHQ6IFwiY29uc2VudFwiLFxyXG4gICAgICAgICAgYWNjZXNzX3R5cGU6IFwib2ZmbGluZVwiLFxyXG4gICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgR2l0SHViUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXHJcbiAgICB9KSxcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aG9yaXplIGNyZWRlbnRpYWxzOlwiLCBjcmVkZW50aWFscyk7XHJcbiAgICAgICAgY29uc3QgYWRtaW5EYXRhID0gYXdhaXQgcHJpc21hLmFkbWluLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWRtaW5EYXRhICYmIGNyZWRlbnRpYWxzPy5lbWFpbCA9PT0gYWRtaW5EYXRhLmVtYWlsKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaXMgYW4gYWRtaW46XCIsIGFkbWluRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCBhZG1pbiA9IHtcclxuICAgICAgICAgICAgaWQ6IGFkbWluRGF0YS5pZCxcclxuICAgICAgICAgICAgbmFtZTogYWRtaW5EYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBhZG1pbkRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBhZG1pbkRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIC8vIFJldHVybiB0aGUgdXNlciBkYXRhIHRvIGxldCBOZXh0QXV0aC5qcyBoYW5kbGUgdGhlIHNlc3Npb24gY3JlYXRpb25cclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYWRtaW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaXMgbm90IGFuIGFkbWluOlwiLCBhZG1pbkRhdGEpO1xyXG4gICAgICAgICAgLy8gUmV0dXJuaW5nIG51bGwgaW5kaWNhdGVzIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmVcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIGp3dDoge1xyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgfSxcclxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNpZ24gSW46XCIsIHVzZXIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBqd3QodG9rZW4sIHVzZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJKV1Q6XCIsIHRva2VuKTtcclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyOlwiLCB1c2VyKTtcclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbiwgdG9rZW4pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXNzaW9uOlwiLCBzZXNzaW9uKTtcclxuICAgICAgLy8gc2Vzc2lvbi51c2VyID0ge1xyXG4gICAgICAvLyAgIGlkOiB0b2tlbi5pZCxcclxuICAgICAgLy8gICBuYW1lOiB0b2tlbi5uYW1lLFxyXG4gICAgICAvLyAgIGVtYWlsOiB0b2tlbi5lbWFpbCxcclxuICAgICAgLy8gICB1c2VybmFtZTogdG9rZW4udXNlcm5hbWUsXHJcbiAgICAgIC8vICAgLy8gQWRkIG90aGVyIHByb3BlcnRpZXMgYXMgbmVlZGVkXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQWRtaW5SZXF1ZXN0KHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImlzQWRtaW5SZXF1ZXN0IHNlc3Npb246XCIsIHNlc3Npb24pO1xyXG5cclxuICAgIC8vIFVuY29tbWVudCB0aGUgZm9sbG93aW5nIGxpbmVzIGlmIHlvdSB3YW50IHRvIHJlc3RyaWN0IGFjY2VzcyB0byBhZG1pbnNcclxuICAgIGlmICghYWRtaW5FbWFpbHMuaW5jbHVkZXMoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5lbmQoKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgYXV0aG9yaXplZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIC8vIENvbnRpbnVlIHdpdGggb3RoZXIgbG9naWMgZm9yIGFkbWluIHJlcXVlc3RzXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJpc0FkbWluUmVxdWVzdCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJHaXRIdWJQcm92aWRlciIsIk5leHRBdXRoIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImFkbWluRW1haWxzIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicHJvdmlkZXJzIiwidGltZW91dCIsImNsaWVudElkIiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsImF1dGhvcml6ZSIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJhZG1pbkRhdGEiLCJhZG1pbiIsImZpbmRGaXJzdCIsIndoZXJlIiwiaWQiLCJuYW1lIiwidXNlcm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlc3Npb24iLCJzdHJhdGVneSIsImp3dCIsImFkYXB0ZXIiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJ0b2tlbiIsImlzQWRtaW5SZXF1ZXN0IiwicmVzIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJlbmQiLCJFcnJvciIsImVycm9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();