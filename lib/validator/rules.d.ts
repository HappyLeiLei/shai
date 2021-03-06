export interface RuleFunction {
    (...values: any[]): boolean;
}
export interface RulesMap {
    string(arg: any): boolean;
    number(arg: any): boolean;
    boolean(arg: any): boolean;
    object(arg: any): boolean;
    array(arg: any): boolean;
    null(arg: any): boolean;
    required: RegExp;
    english: RegExp;
    alphanum: RegExp;
    nospace: RegExp;
    nodbc: RegExp;
    qq: RegExp;
    age: RegExp;
    zipcode: RegExp;
    ip: RegExp;
    port: RegExp;
    domain: RegExp;
    bizcode: RegExp;
    invoice: RegExp;
    bankcard: RegExp;
    currency: RegExp;
    float: RegExp;
    int: RegExp;
    decimal: RegExp;
    chinese: RegExp;
    mail: RegExp;
    url: RegExp;
    account: RegExp;
    password: RegExp;
    safe: RegExp;
    hex: RegExp;
    color: RegExp;
    ascii: RegExp;
    base64: RegExp;
    md5: RegExp;
    uuid: RegExp;
    mobile: RegExp;
    telphone: RegExp;
    phone: RegExp;
    percent: RegExp;
    year: RegExp;
    month: RegExp;
    day: RegExp;
    hour: RegExp;
    minute: RegExp;
    time: RegExp;
    date: RegExp;
    datetime: RegExp;
    file: RegExp;
    image: RegExp;
    word: RegExp;
    lon: RegExp;
    lat: RegExp;
    approval: RegExp;
    citycode: RegExp;
    address: RegExp;
    upper: RegExp;
    lower: RegExp;
    isbn: RegExp;
    tag: RegExp;
    jwt: RegExp;
    objectid: RegExp;
    maca: RegExp;
    even(arg: string | number): boolean;
    odd(arg: string | number): boolean;
    ipv6(arg: string): boolean;
    bodycard(arg: string | number): boolean;
    autocard(arg: string): boolean;
    not(arg1: any, arg2: any): boolean;
    eq(arg1: any, arg2: any): boolean;
    gt<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    gte<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    lt<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    lte<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    between<T extends string | number | Date>(arg1: T, arg2: T, arg3: T): boolean;
    min<T extends string | number | Date>(arg1: T, ...args: T[]): boolean;
    max<T extends string | number | Date>(arg1: T, ...args: T[]): boolean;
    length(arg1: string | number | any[], arg2: string | number): boolean;
    minlength(arg1: string | number | any[], arg2: string | number): boolean;
    maxlength(arg1: string | number | any[], arg2: string | number): boolean;
    bitmax(arg1: string | number | any[], arg2: string | number): boolean;
    in<T extends string | number | any[] | object>(arg1: T, arg2: T): boolean;
    has<T extends string | number | any[] | object>(arg1: T, arg2: T): boolean;
    empty(arg: any): boolean;
    regexp: (arg: any, arg2: RegExp | string) => boolean;
    custom: (arg: any, arg2: string | RuleFunction, ...args: Array<any>) => boolean;
}
export interface RulesInterface extends RulesMap {
    [key: string]: RegExp | RuleFunction;
}
export declare const rules: RulesInterface;
