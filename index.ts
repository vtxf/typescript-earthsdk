// Import stylesheets
import './style.css';

declare var XE;

var earth;
var bgImagery;

function startup() {
    // earth = new XE.Earth('earthContainer');
    earth = new XE.Earth('earthContainer', {
        // 这里设置Viewer的配置，和new Viewer(container, options)中的options一致
        homeButton: true,
        timeline: true,
    });

    earth.sceneTree.root = {
        "children": [
            {
                "czmObject": {
                    "name": "默认离线影像",
                    "xbsjType": "Imagery",
                    "xbsjImageryProvider": {
                        "createTileMapServiceImageryProvider": {
                            "url": XE.HTML.cesiumDir + 'Assets/Textures/NaturalEarthII',
                            "fileExtension": 'jpg',
                        },
                        "type": "createTileMapServiceImageryProvider"
                    }
                }
            },
        ]
    };
}

// 1 XE.ready()会加载Cesium.js等其他资源，注意ready()返回一个Promise对象。
XE.ready().then(startup);    
