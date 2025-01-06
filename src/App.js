import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const colorsArray = [
        {
            "name": "LIGHTCORAL",
            "hex": "#F08080",
            "rgb": "RGB(240, 128, 128)",
            "families": ["red", "pink", "coral", "light"]
        },
        {
            "name": "SALMON",
            "hex": "#FA8072",
            "rgb": "RGB(250, 128, 114)",
            "families": ["red", "pink", "orange", "salmon"]
        },
        {
            "name": "DARKSALMON",
            "hex": "#E9967A",
            "rgb": "RGB(233, 150, 122)",
            "families": ["red", "pink", "orange", "salmon", "dark"]
        },
        {
            "name": "LIGHTSALMON",
            "hex": "#FFA07A",
            "rgb": "RGB(255, 160, 122)",
            "families": ["red", "pink", "orange", "salmon", "light"]
        },
        {
            "name": "LIGHTPINK",
            "hex": "#FFB6C1",
            "rgb": "RGB(255, 182, 193)",
            "families": ["pink", "light"]
        },
        {
            "name": "MEDIUMVIOLETRED",
            "hex": "#C71585",
            "rgb": "RGB(199, 21, 133)",
            "families": ["pink", "purple", "violet", "medium"]
        },
        {
            "name": "PALEVIOLETRED",
            "hex": "#DB7093",
            "rgb": "RGB(219, 112, 147)",
            "families": ["pink", "pale", "violet"]
        },
        {
            "name": "LIGHTGOLDENRODYELLOW",
            "hex": "#FAFAD2",
            "rgb": "RGB(250, 250, 210)",
            "families": ["yellow", "light", "goldenrod", "tan"]
        },
        {
            "name": "PEACHPUFF",
            "hex": "#FFDAB9",
            "rgb": "RGB(255, 218, 185)",
            "families": ["pink", "orange", "peach"]
        },
        {
            "name": "PALEGOLDENROD",
            "hex": "#EEE8AA",
            "rgb": "RGB(238, 232, 170)",
            "families": ["yellow", "tan", "pale", "goldenrod"]
        },
        {
            "name": "KHAKI",
            "hex": "#F0E68C",
            "rgb": "RGB(240, 230, 140)",
            "families": ["yellow", "tan", "khaki"]
        },
        {
            "name": "DARKKHAKI",
            "hex": "#BDB76B",
            "rgb": "RGB(189, 183, 107)",
            "families": ["yellow", "tan", "khaki", "dark"]
        },
        {
            "name": "VIOLET",
            "hex": "#EE82EE",
            "rgb": "RGB(238, 130, 238)",
            "families": ["purple", "violet", "pink"]
        },
        {
            "name": "MAGENTA",
            "hex": "#FF00FF",
            "rgb": "RGB(255, 0, 255)",
            "families": ["purple", "pink", "magenta"]
        },
        {
            "name": "MEDIUMORCHID",
            "hex": "#BA55D3",
            "rgb": "RGB(186, 85, 211)",
            "families": ["purple", "orchid", "medium"]
        },
        {
            "name": "BLUEVIOLET",
            "hex": "#8A2BE2",
            "rgb": "RGB(138, 43, 226)",
            "families": ["purple", "blue", "violet"]
        },
        {
            "name": "DARKVIOLET",
            "hex": "#9400D3",
            "rgb": "RGB(148, 0, 211)",
            "families": ["purple", "dark", "violet"]
        },
        {
            "name": "DARKORCHID",
            "hex": "#9932CC",
            "rgb": "RGB(153, 50, 204)",
            "families": ["purple", "dark", "orchid"]
        },
        {
            "name": "DARKMAGENTA",
            "hex": "#8B008B",
            "rgb": "RGB(139, 0, 139)",
            "families": ["purple", "dark", "magenta"]
        },
        {
            "name": "SLATEBLUE",
            "hex": "#6A5ACD",
            "rgb": "RGB(106, 90, 205)",
            "families": ["purple", "blue", "slate"]
        },
        {
            "name": "DARKSLATEBLUE",
            "hex": "#483D8B",
            "rgb": "RGB(72, 61, 139)",
            "families": ["purple", "blue", "slate", "dark"]
        },
        {
            "name": "MEDIUMSLATEBLUE",
            "hex": "#7B68EE",
            "rgb": "RGB(123, 104, 238)",
            "families": ["purple", "blue", "slate", "medium"]
        },
        {
            "name": "MEDIUMSPRINGGREEN",
            "hex": "#00FA9A",
            "rgb": "RGB(0, 250, 154)",
            "families": ["green", "medium", "spring"]
        },
        {
            "name": "MEDIUMSEAGREEN",
            "hex": "#3CB371",
            "rgb": "RGB(60, 179, 113)",
            "families": ["green", "sea", "medium"]
        },
        {
            "name": "DARKOLIVEGREEN",
            "hex": "#556B2F",
            "rgb": "RGB(85, 107, 47)",
            "families": ["green", "olive", "dark"]
        },
        {
            "name": "MEDIUMAQUAMARINE",
            "hex": "#66CDAA",
            "rgb": "RGB(102, 205, 170)",
            "families": ["green", "blue", "aquamarine", "medium"]
        },
        {
            "name": "DARKSEAGREEN",
            "hex": "#8FBC8B",
            "rgb": "RGB(143, 188, 139)",
            "families": ["green", "sea", "dark"]
        },
        {
            "name": "LIGHTSEAGREEN",
            "hex": "#20B2AA",
            "rgb": "RGB(32, 178, 170)",
            "families": ["green", "blue", "sea", "light"]
        },
        {
            "name": "DARKCYAN",
            "hex": "#008B8B",
            "rgb": "RGB(0, 139, 139)",
            "families": ["green", "blue", "cyan", "dark"]
        },
        {
            "name": "LIGHTCYAN",
            "hex": "#E0FFFF",
            "rgb": "RGB(224, 255, 255)",
            "families": ["blue", "cyan", "light"]
        },
        {
            "name": "PALETURQUOISE",
            "hex": "#AFEEEE",
            "rgb": "RGB(175, 238, 238)",
            "families": ["blue", "turquoise", "pale"]
        },
        {
            "name": "MEDIUMTURQUOISE",
            "hex": "#48D1CC",
            "rgb": "RGB(72, 209, 204)",
            "families": ["blue", "turquoise", "medium"]
        },
        {
            "name": "DARKTURQUOISE",
            "hex": "#00CED1",
            "rgb": "RGB(0, 206, 209)",
            "families": ["blue", "turquoise", "dark"]
        },
        {
            "name": "LIGHTSTEELBLUE",
            "hex": "#B0C4DE",
            "rgb": "RGB(176, 196, 222)",
            "families": ["blue", "steel", "light"]
        },
        {
            "name": "LIGHTSKYBLUE",
            "hex": "#87CEFA",
            "rgb": "RGB(135, 206, 250)",
            "families": ["blue", "sky", "light"]
        },
        {
            "name": "DEEPSKYBLUE",
            "hex": "#00BFFF",
            "rgb": "RGB(0, 191, 255)",
            "families": ["blue", "sky", "deep"]
        },
        {
            "name": "GOLDENROD",
            "hex": "#DAA520",
            "rgb": "RGB(218, 165, 32)",
            "families": ["brown", "goldenrod", "orange"]
        },
        {
            "name": "DARKGOLDENROD",
            "hex": "#B8860B",
            "rgb": "RGB(184, 134, 11)",
            "families": ["brown", "orange", "goldenrod", "dark"]
        },
        {
            "name": "LAVENDERBLUSH",
            "hex": "#FFF0F5",
            "rgb": "RGB(255, 240, 245)",
            "families": ["white", "lavender", "pink"]
        },
        {
            "name": "LIGHTSLATEGRAY",
            "hex": "#778899",
            "rgb": "RGB(119, 136, 153)",
            "families": ["gray", "light", "slate"]
        },
        {
            "name": "DARKSLATEGRAY",
            "hex": "#2F4F4F",
            "rgb": "RGB(47, 79, 79)",
            "families": ["gray", "slate", "dark"]
        },
    ]
    const [selectedColor, setSelectedColor] = useState(null);
    const [colorSelectedByAndrius, setColorSelectedByAndrius] = useState(null);

    return (
        <div className="container">
            <div className="colors-container">

                <div className="render" style={{ backgroundColor: selectedColor?.hex || 'transparent' }}>
                    {selectedColor && (
                            <div>
                                <p>Color Name: {selectedColor.name}</p>
                                <div className="families-container">
                                    {selectedColor.families.map((family, familyIndex) =>
                                        <div key={familyIndex}
                                             className="colors-block-families"
                                             style={{backgroundColor: family}}>
                                            {family}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                </div>

                <div className="colors">
                    {colorsArray.map((colorItem, index) =>
                        <div className={`color-block`}
                             key={index}
                             style={{backgroundColor: colorItem.hex}}
                             onClick={() => setSelectedColor(colorItem)}>
                        </div>
                    )}
                </div>
            </div>
            <div className="by-Andrius">
                <div className="d-flex j-center">
                    {colorSelectedByAndrius ?
                        <div className="render" style={{backgroundColor: colorSelectedByAndrius.hex}}>
                            <p>{colorSelectedByAndrius.name}</p>
                            <div className="families-container">
                                {colorSelectedByAndrius.families.map((x, i) =>
                                    <div className="colors-block-families"
                                         style={{backgroundColor: x}}></div>)}
                            </div>
                        </div> :
                        <div className="render" style={{backgroundColor: "#f7f7f7"}}>
                        </div>
                    }
                </div>

                <div className="colors">
                    {colorsArray.map((item, index) =>
                        <div className={`color-block`}
                             style={{backgroundColor: item.hex}}
                             key={index}
                             onClick={() => setColorSelectedByAndrius(item)}>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
