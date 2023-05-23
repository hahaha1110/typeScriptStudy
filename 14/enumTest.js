var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["InternalServerError"] = 500] = "InternalServerError";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["ok"] = 200] = "ok";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.InternalServerError; // 500
