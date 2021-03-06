export interface RuleFunction {
    (...values: any[]): boolean | string | number;
}
export interface RulesMap {
    md5(arg2?: boolean, arg?: string): string;
    uuid(arg?: string): string;
    now(arg?: string): string;
    regexp(arg?: string | RegExp): string;
    enum<T extends boolean | string | number>(...args: T[]): T;
    int(arg1?: number, arg2?: number): number;
    number(arg1?: number, arg2?: number, arg3?: number): number;
    bool(): boolean;
    month(): number;
    day(): number;
    minute(): number;
    alpha(): number;
    rgb(arg?: boolean): string;
    hsl(arg?: boolean): string;
    validcode(arg?: number): string;
    mid: RegExp;
    account: RegExp;
    password: RegExp;
    color: RegExp;
    url: RegExp;
    mail: RegExp;
    mobile: RegExp;
    port: RegExp;
    bizcode: RegExp;
    bankcard: RegExp;
    qq: RegExp;
    english(num?: number, arg?: string): string;
    upper(arg?: string): string;
    lower(arg?: string): string;
    chinese(num?: number, arg?: string): string;
    ip(local?: boolean): string;
    text(n1?: number, arg?: string, n2?: number): string;
    price(arg1?: number, arg2?: number, arg3?: boolean): string;
    enName(): string;
    enMaleName(): string;
    enFemaleName(): string;
    surname(): string;
    cnName(): string;
    cnMaleName(): string;
    cnFemaleName(): string;
    enState(): string;
    cnState(): string;
    company(): string;
    road(): string;
    build(): string;
}
export interface RulesInterface extends RulesMap {
    [key: string]: RegExp | RuleFunction;
}
export declare const rules: RulesInterface;
