// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let newUser: User = {
    id: 1,
    name: "빈빈빈",
    nickname: "been",
    birth: "2999.99.54",
    bio: "안녕",
    location: "우주시",
};

// 주의 : 중복 선언 불가
function func() {
    // 함수 내에서를 가능, 스코프 범위의 차이
    type User = {};
}

// 인덱스 시그니쳐
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    // 아래와 같이 특별한 프로퍼티를 생성하여 오류를 범하게 유도
    Korea: number;
};

// 빈 객체를 가지고 있어도 위반할 프로퍼티가 없기 때문에 오류 X
let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
};

/**
 * 당신만의 Theme를 만들도록 아래 상수를 활용하여 타입을 지정해주세요.
 * - 컬러의 값은 자동완성되어야 합니다.
 */

const palette = {
    maroon: "#800000",
    darkRed: "#8B0000",
    brown: "#A52A2A",
    firebrick: "#B22222",
    crimson: "#DC143C",
    red: "#FF0000",
    tomato: "#FF6347",
    coral: "#FF7F50",
    indianRed: "#CD5C5C",
    lightCoral: "#F08080",
    darkSalmon: "#E9967A",
    salmon: "#FA8072",
    lightSalmon: "#FFA07A",
    orangeRed: "#FF4500",
    darkOrange: "#FF8C00",
    orange: "#FFA500",
    gold: "#FFD700",
    darkGoldenRod: "#B8860B",
    goldenRod: "#DAA520",
    paleGoldenRod: "#EEE8AA",
    darkKhaki: "#BDB76B",
    khaki: "#F0E68C",
    olive: "#808000",
    yellow: "#FFFF00",
    yellowGreen: "#9ACD32",
    darkOliveGreen: "#556B2F",
    oliveDrab: "#6B8E23",
    lawnGreen: "#7CFC00",
    chartreuse: "#7FFF00",
    greenYellow: "#ADFF2F",
    darkGreen: "#006400",
    green: "#008000",
    forestGreen: "#228B22",
    lime: "#00FF00",
    limeGreen: "#32CD32",
    lightGreen: "#90EE90",
    paleGreen: "#98FB98",
    darkSeaGreen: "#8FBC8F",
    mediumSpringGreen: "#00FA9A",
    springGreen: "#00FF7F",
    seaGreen: "#2E8B57",
    mediumAquaMarine: "#66CDAA",
    mediumSeaGreen: "#3CB371",
    lightSeaGreen: "#20B2AA",
    darkSlateGray: "#2F4F4F",
    teal: "#008080",
    darkCyan: "#008B8B",
    aqua: "#00FFFF",
    cyan: "#00FFFF",
    lightCyan: "#E0FFFF",
    darkTurquoise: "#00CED1",
    turquoise: "#40E0D0",
    mediumTurquoise: "#48D1CC",
    paleTurquoise: "#AFEEEE",
    aquaMarine: "#7FFFD4",
    powderBlue: "#B0E0E6",
    cadetBlue: "#5F9EA0",
    steelBlue: "#4682B4",
    cornFlowerBlue: "#6495ED",
    deepSkyBlue: "#00BFFF",
    dodgerBlue: "#1E90FF",
    lightBlue: "#ADD8E6",
    skyBlue: "#87CEEB",
    lightSkyBlue: "#87CEFA",
    midnightBlue: "#191970",
    navy: "#000080",
    darkBlue: "#00008B",
    mediumBlue: "#0000CD",
    blue: "#0000FF",
    royalBlue: "#4169E1",
    blueViolet: "#8A2BE2",
    indigo: "#4B0082",
    darkSlateBlue: "#483D8B",
    slateBlue: "#6A5ACD",
    mediumSlateBlue: "#7B68EE",
    mediumPurple: "#9370DB",
    darkMagenta: "#8B008B",
    darkViolet: "#9400D3",
    darkOrchid: "#9932CC",
    mediumOrchid: "#BA55D3",
    purple: "#800080",
    thistle: "#D8BFD8",
    plum: "#DDA0DD",
    violet: "#EE82EE",
    "magenta/fuchsia": "#FF00FF",
    orchid: "#DA70D6",
    mediumVioletRed: "#C71585",
    paleVioletRed: "#DB7093",
    deepPink: "#FF1493",
    hotPink: "#FF69B4",
    lightPink: "#FFB6C1",
    pink: "#FFC0CB",
    antiqueWhite: "#FAEBD7",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    blanchedAlmond: "#FFEBCD",
    wheat: "#F5DEB3",
    cornSilk: "#FFF8DC",
    lemonChiffon: "#FFFACD",
    lightGoldenRodYellow: "#FAFAD2",
    lightYellow: "#FFFFE0",
    saddleBrown: "#8B4513",
    sienna: "#A0522D",
    chocolate: "#D2691E",
    peru: "#CD853F",
    sandyBrown: "#F4A460",
    burlyWood: "#DEB887",
    tan: "#D2B48C",
    rosyBrown: "#BC8F8F",
    moccasin: "#FFE4B5",
    navajoWhite: "#FFDEAD",
    peachPuff: "#FFDAB9",
    mistyRose: "#FFE4E1",
    lavenderBlush: "#FFF0F5",
    linen: "#FAF0E6",
    oldLace: "#FDF5E6",
    papayaWhip: "#FFEFD5",
    seaShell: "#FFF5EE",
    mintCream: "#F5FFFA",
    slateGray: "#708090",
    lightSlateGray: "#778899",
    lightSteelBlue: "#B0C4DE",
    lavender: "#E6E6FA",
    floralWhite: "#FFFAF0",
    aliceBlue: "#F0F8FF",
    ghostWhite: "#F8F8FF",
    honeydew: "#F0FFF0",
    ivory: "#FFFFF0",
    azure: "#F0FFFF",
    snow: "#FFFAFA",
    black: "#000000",
    "dimGray/dimGrey": "#696969",
    "gray/grey": "#808080",
    "darkGray/darkGrey": "#A9A9A9",
    silver: "#C0C0C0",
    "lightGray/lightGrey": "#D3D3D3",
    gainsboro: "#DCDCDC",
    whiteSmoke: "#F5F5F5",
    white: "#FFFFFF",
} as const;

const basicColors = {
    black: "#000000",
    white: "#FFFFFF",
    red: "#FF0000",
    lime: "#00FF00",
    blue: "#0000FF",
    yellow: "#FFFF00",
    "cyan/aqua": "#00FFFF",
    "magenta/fuchsia": "#FF00FF",
    silver: "#C0C0C0",
    gray: "#808080",
    maroon: "#800000",
    olive: "#808000",
    green: "#008000",
    purple: "#800080",
    teal: "#008080",
    navy: "#000080",
};

type PaletteTheme = typeof palette;

// 상수
const YOURE_PALETTE_THEME: PaletteTheme = {
    ...palette,
    "lightGray/lightGrey": "#D3D3D3",
};
