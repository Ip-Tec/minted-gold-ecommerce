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
exports.id = "pages/api/dashboard";
exports.ids = ["pages/api/dashboard"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/dashboard.js":
/*!********************************!*\
  !*** ./pages/api/dashboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/dashboard.js\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            // Safeguard: Check if req.user is defined\n            if (!req.user) {\n                throw new Error(\"User not authenticated\");\n            }\n            const totalProducts = await prisma.product.count();\n            const totalUsers = await prisma.user.count();\n            // Assuming there's a relationship between User and Product for wishlist\n            const wishlistCount = await prisma.user.findUnique({\n                where: {\n                    id: req.user.id\n                }\n            }).productsInWishlist();\n            res.status(200).json({\n                totalProducts,\n                totalUsers,\n                wishlistCount: wishlistCount.length\n            });\n        } catch (error) {\n            console.error(\"Error fetching dashboard data:\", error.message);\n            res.status(401).json({\n                error: \"User not authenticated\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlCQUF5QjtBQUNxQjtBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUVoQixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixJQUFJO1lBQ0YsMENBQTBDO1lBQzFDLElBQUksQ0FBQ0YsSUFBSUcsSUFBSSxFQUFFO2dCQUNiLE1BQU0sSUFBSUMsTUFBTSwwQkFBMEI7WUFDNUMsQ0FBQztZQUVELE1BQU1DLGdCQUFnQixNQUFNUCxPQUFPUSxPQUFPLENBQUNDLEtBQUs7WUFDaEQsTUFBTUMsYUFBYSxNQUFNVixPQUFPSyxJQUFJLENBQUNJLEtBQUs7WUFFMUMsd0VBQXdFO1lBQ3hFLE1BQU1FLGdCQUFnQixNQUFNWCxPQUFPSyxJQUFJLENBQ3BDTyxVQUFVLENBQUM7Z0JBQ1ZDLE9BQU87b0JBQUVDLElBQUlaLElBQUlHLElBQUksQ0FBQ1MsRUFBRTtnQkFBQztZQUMzQixHQUNDQyxrQkFBa0I7WUFFckJaLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CVjtnQkFDQUc7Z0JBQ0FDLGVBQWVBLGNBQWNPLE1BQU07WUFDckM7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0EsTUFBTUUsT0FBTztZQUM3RGxCLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVFLE9BQU87WUFBeUI7UUFDekQ7SUFDRixPQUFPO1FBQ0xoQixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVJLFNBQVM7UUFBcUI7SUFDdkQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW50ZWQtZ29sZC1hZG1pbi8uL3BhZ2VzL2FwaS9kYXNoYm9hcmQuanM/ODExZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvZGFzaGJvYXJkLmpzXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTYWZlZ3VhcmQ6IENoZWNrIGlmIHJlcS51c2VyIGlzIGRlZmluZWRcclxuICAgICAgaWYgKCFyZXEudXNlcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRvdGFsUHJvZHVjdHMgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5jb3VudCgpO1xyXG4gICAgICBjb25zdCB0b3RhbFVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuY291bnQoKTtcclxuXHJcbiAgICAgIC8vIEFzc3VtaW5nIHRoZXJlJ3MgYSByZWxhdGlvbnNoaXAgYmV0d2VlbiBVc2VyIGFuZCBQcm9kdWN0IGZvciB3aXNobGlzdFxyXG4gICAgICBjb25zdCB3aXNobGlzdENvdW50ID0gYXdhaXQgcHJpc21hLnVzZXJcclxuICAgICAgICAuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpZDogcmVxLnVzZXIuaWQgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5wcm9kdWN0c0luV2lzaGxpc3QoKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICB0b3RhbFByb2R1Y3RzLFxyXG4gICAgICAgIHRvdGFsVXNlcnMsXHJcbiAgICAgICAgd2lzaGxpc3RDb3VudDogd2lzaGxpc3RDb3VudC5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhc2hib2FyZCBkYXRhOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkXCIgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyIiwiRXJyb3IiLCJ0b3RhbFByb2R1Y3RzIiwicHJvZHVjdCIsImNvdW50IiwidG90YWxVc2VycyIsIndpc2hsaXN0Q291bnQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInByb2R1Y3RzSW5XaXNobGlzdCIsInN0YXR1cyIsImpzb24iLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/dashboard.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/dashboard.js"));
module.exports = __webpack_exports__;

})();