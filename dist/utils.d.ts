import type { ExportConfig, TargetConfig } from './types.js';
import { Lang } from './types.js';
export declare const getRootPath: () => string;
export declare const defineConfig: (config: ExportConfig) => ExportConfig;
export declare const getFile: (filePath: string) => string;
export declare const getFiles: (entry: string, deep: boolean) => string[];
export declare const createJsonBuffer: (val: Record<string, any>, tN?: number) => string;
export declare const mergeJson: (json1: Record<string, any>, json2: Record<string, any>) => Record<string, any>;
export declare const isFilePath: (path: string) => boolean;
export declare const getOutPath: (it: TargetConfig, duplicateRemovalEntries: string[], idx: number, entryPath: string) => string;
export declare const getBaiduLangCode: (lang: Lang) => Lang;
export declare const consoleSuccess: (...msg: string[]) => void;
export declare const consoleLog: (...msg: string[]) => void;
export declare const consoleWarn: (...msg: string[]) => void;
export declare const consoleError: (...msg: string[]) => void;
