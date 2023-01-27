"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForumModule = void 0;
var common_1 = require("@nestjs/common");
var topic_module_1 = require("./topic/topic.module");
var category_module_1 = require("./category/category.module");
var ForumModule = /** @class */ (function () {
    function ForumModule() {
    }
    ForumModule = __decorate([
        (0, common_1.Module)({
            imports: [topic_module_1.TopicModule, category_module_1.CategoryModule]
        })
    ], ForumModule);
    return ForumModule;
}());
exports.ForumModule = ForumModule;
