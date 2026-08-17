var SPRITES = {
  PALM_TREE:              { x:    5, y:    5, w:  215, h:  540 },
  BILLBOARD08:            { x:  230, y:    5, w:  385, h:  265 },
  TREE1:                  { x:  625, y:    5, w:  360, h:  360 },
  DEAD_TREE1:             { x:    5, y:  555, w:  135, h:  332 },
  BILLBOARD09:            { x:  150, y:  555, w:  328, h:  282 },
  BOULDER3:               { x:  230, y:  280, w:  320, h:  220 },
  COLUMN:                 { x:  995, y:    5, w:  200, h:  315 },
  BILLBOARD01:            { x:  625, y:  375, w:  300, h:  170 },
  BILLBOARD06:            { x:  488, y:  555, w:  298, h:  190 },
  BILLBOARD05:            { x:    5, y:  897, w:  298, h:  190 },
  BILLBOARD07:            { x:  313, y:  897, w:  298, h:  190 },
  BOULDER2:               { x:  621, y:  897, w:  298, h:  140 },
  TREE2:                  { x: 1205, y:    5, w:  282, h:  295 },
  BILLBOARD04:            { x: 1205, y:  310, w:  268, h:  170 },
  DEAD_TREE2:             { x: 1205, y:  490, w:  150, h:  260 },
  BOULDER1:               { x: 1205, y:  760, w:  168, h:  248 },
  BUSH1:                  { x:    5, y: 1097, w:  240, h:  155 },
  CACTUS:                 { x:  929, y:  897, w:  235, h:  118 },
  BUSH2:                  { x:  255, y: 1097, w:  232, h:  152 },
  BILLBOARD03:            { x:    5, y: 1262, w:  230, h:  220 },
  BILLBOARD02:            { x:  245, y: 1262, w:  215, h:  220 },
  STUMP:                  { x:  995, y:  330, w:  195, h:  140 },
  SEMI:                   { x: 1365, y:  490, w:  122, h:  144 },
  TRUCK:                  { x: 1365, y:  644, w:  100, h:   78 },
  CAR03:                  { x: 1383, y:  760, w:   88, h:   55 },
  CAR02:                  { x: 1383, y:  825, w:   80, h:   59 },
  CAR04:                  { x: 1383, y:  894, w:   80, h:   57 },
  CAR01:                  { x: 1205, y: 1018, w:   80, h:   56 },
  CAR_QUICO: { x: 10, y: 1938, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  CAR_NHONHO: { x: 340, y: 1938, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  CAR_SEU_MADRUGA: { x: 670, y: 1938, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  CAR_DONA_FLORINDA: { x: 10, y: 2161, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  CAR_POPIS: { x: 340, y: 2161, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  CAR_PATI: { x: 670, y: 2161, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  CAR_PROFESSOR_GIRAFALES: { x: 10, y: 2384, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  CAR_DONA_CLOTILDE: { x: 340, y: 2384, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  CAR_GODINES: { x: 670, y: 2384, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  PLAYER_UPHILL_LEFT: { x: 340, y: 1715, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  PLAYER_UPHILL_STRAIGHT: { x: 10, y: 1715, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  PLAYER_UPHILL_RIGHT: { x: 670, y: 1715, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  PLAYER_LEFT: { x: 340, y: 1492, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  PLAYER_STRAIGHT: { x: 10, y: 1492, w: 80, h: 53.33, sourceW: 320, sourceH: 213 },
  PLAYER_RIGHT: { x: 670, y: 1492, w: 80, h: 53.33, sourceW: 320, sourceH: 213 }
};

// Vila do Chaves scenery sprites appended below the original sheet.
SPRITES.VILA_CASA_14 = { x: 42, y: 2663, w: 206, h: 185, sourceW: 275, sourceH: 247 };
SPRITES.VILA_CASA_71 = { x: 437, y: 2662, w: 154, h: 187, sourceW: 205, sourceH: 249 };
SPRITES.VILA_CASA_72 = { x: 764, y: 2663, w: 203, h: 186, sourceW: 271, sourceH: 248 };
SPRITES.VILA_CHURROS = { x: 1152, y: 2675, w: 162, h: 168, sourceW: 216, sourceH: 224 };
SPRITES.VILA_ARVORE = { x: 66, y: 2996, w: 170, h: 226, sourceW: 227, sourceH: 301 };
SPRITES.VILA_ARVORE_FLORES = { x: 466, y: 3053, w: 111, h: 141, sourceW: 148, sourceH: 188 };
SPRITES.VILA_BARRIL = { x: 842, y: 3066, w: 87, h: 121, sourceW: 116, sourceH: 161 };
SPRITES.VILA_POSTE = { x: 1230, y: 3035, w: 44, h: 167, sourceW: 59, sourceH: 223 };
SPRITES.VILA_PLACA_VILA = { x: 101, y: 3460, w: 118, h: 70, sourceW: 157, sourceH: 93 };
SPRITES.VILA_PLACA_SE_RENTA = { x: 485, y: 3440, w: 82, h: 101, sourceW: 109, sourceH: 134 };

SPRITES.VILA_BILLBOARDS = [
  SPRITES.VILA_CASA_14,
  SPRITES.VILA_CASA_71,
  SPRITES.VILA_CASA_72,
  SPRITES.VILA_CHURROS,
  SPRITES.VILA_PLACA_VILA,
  SPRITES.VILA_PLACA_SE_RENTA
];
SPRITES.VILA_PLANTS = [
  SPRITES.VILA_ARVORE,
  SPRITES.VILA_ARVORE_FLORES,
  SPRITES.VILA_BARRIL,
  SPRITES.VILA_POSTE
];
