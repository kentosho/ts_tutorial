"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const c3 = __importStar(require("c3"));
let chart = c3.generate({
    bindto: '#chart',
    data: {
        type: 'donut',
        columns: [
            ['良い感じ', 50],
            ['ピンとこない', 50]
        ]
    },
    donut: {
        title: 'TypeScriptの印象は？'
    }
});
// ↓　　ここから下を追記
setTimeout(() => {
    chart.load({
        columns: [
            ['良い感じ', 30],
            ['ピンとこない', 30],
            ['最高', 30]
        ]
    });
}, 3000);
setTimeout(() => {
    chart.unload({
        ids: '最高'
    });
}, 5000);
// ↑ ここまで追記
