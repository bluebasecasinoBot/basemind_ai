import { __c, __g, __p, __SYD, __u, __v } from "../sydneyDom_v2.js";
import "./displayCred.js"

__SYD.createAI__sections_main = () =>{
    return __c(
        "div",
        {
            style:`height:100vh;width:100%;display:${__p(["createAI__sections_main" , "display"] , false) ? "flex" : "none"};justify-content:center;align-items:center;min-height:100vh;`
        },
        [
            __c(
                "h2",
                {
                    style:"font-size:20px;color:#3399FF;font-weight:500;text-transform:capitalize;margin-bottom:16px;position:absolute;left:50%;transform:translateX(-50%);top:10px;color:#fff;font-family:shine;text-shadow:2px 2px 1px #141414;text-align:center;z-index:200;"
                },
                [
                    `${__p(["createAI__sections_main" , "topText"] , "Customize Your BASEMIND AI Assistant")}`
                ]
            ),
            __SYD.createAi__sections_sec1(),
            __SYD.createAi__sections_sec2()
        ],
        {
            createState:{
                stateName:"createAI__sections_main",
                state:{
                    display:false,
                    section1:true,
                    section2:false,
                    topText:"Customize Your BASEMIND AI Assistant",
                    display_func:() =>{
                        const state = __g("createAI__sections_main");
                        state.display = true;
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    remove_display_func:() =>{
                        const state = __g("createAI__sections_main");
                        state.display = false;
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    display_section_1:() =>{
                        const state = __g("createAI__sections_main");
                        state.section1 = true;
                        state.section2 = false;
                        state.topText = "Customize Your BASEMIND AI Assistant"
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    display_section_2:() =>{
                        const state = __g("createAI__sections_main");
                        state.section1 = false;
                        state.section2 = true;
                        state.topText = ""//"Buy BASEMIND token to deploy AI"
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editName:(name) =>{
                        const state = __g("createAI__sections_main");
                        state.userInfo.agentName = name;
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editPersonality:(value) =>{
                        const state = __g("createAI__sections_main");
                        state.userInfo.personality = value;
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editResponseTone:(value) =>{
                        const state = __g("createAI__sections_main");
                        state.userInfo.responseTone = value;
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editExpertise:(value) =>{
                        const state = __g("createAI__sections_main");
                        state.userInfo.expertise = value;
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editResponseFormat:(value) =>{
                        const state = __g("createAI__sections_main");
                        state.userInfo.responseFormat = value;
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editAskQuestion:(value) =>{
                        const state = __g("createAI__sections_main");
                        state.userInfo.askQuestion = value;
                        __u(
                            "createAI__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    userInfo:{
                        agentName:"",
                        personality:"",
                        responseTone:"",
                        expertise:"",
                        responseFormat:"",
                        askQuestion:""
                    }
                }
            }
        }
    )
}

__SYD.pageNav__btn__sec1 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:16px;position:sticky;left:100%;right:16px;bottom:0px;display:flex;column-gap:16px;justify-content:space-between;pointer-events:none;flex-direction:row-reverse;"
        },
        [
            __SYD.ul_lists_el({child:__SYD.pTag({text:"Save Agent" , class_:"navClick" , style:"font-size:16px;font-weight:700;background:linear-gradient(to top right , #8A2BE2 , #00FFFF);pointer-events:auto;"}) , function_:{
                onclick:() =>{

                    if(Object.keys(__p(['createAI__sections_main','userInfo'])).every(val =>{return __p(['createAI__sections_main','userInfo'])[val].length > 0}))
                    {
                        __p(["popUp" , "displayText"])("Agent customisation complete ✅");

                        __p(["createAI__sections_main" , "display_section_2"])();

                    }else 
                    {
                        __p(["popUp" , "displayText"])("Please complete the customisation form 😢" , "warn");
                    }

                }
            }}),
            __SYD.ul_lists_el({child:__SYD.pTag({text:"Menu" , class_:"navClick" , style:"font-size:16px;font-weight:700;background:linear-gradient(to top right , #8A2BE2 , #00FFFF);pointer-events:auto;"}) , function_:{
                onclick:() =>{
                    __p(['createIntro_tabMain' , 'display_func'])();

                    __p(['createAI__sections_main' , 'remove_display_func'])();//disablePopUp

                    __p(['popUp' , 'disablePopUp'])();
                }
            }})
        ]
    )
}

__SYD.pageNav__btn__sec2 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:fit-content;padding:16px;position:fixed;left:0;bottom:0%;display:flex;column-gap:16px;width:fit-content;justify-content:space-between;align-self:flex-start;"
        },
        [
            __SYD.ul_lists_el({child:__SYD.pTag({text:"Back" , class_:"navClick" , style:"font-size:16px;font-weight:700;background:linear-gradient(to top right , #8A2BE2 , #00FFFF);"}) , function_:{
                onclick:() =>{
                    __p(["createAI__sections_main" , "display_section_1"])();
                    __p(["cred_container" , "un_displayFunc"])()
                    __p(["cred_container" , "clearCred"])()//clearCred

                    console.log(__v['gen_btn_cred'])
                    __v['gen_btn_cred'].children[0].style.pointerEvents = "auto"
                    __v['gen_btn_cred'].children[0].style.opacity = "1"
                }
            }})
        ]
    )
}

__SYD.createAi__sections_sec1 = () =>{
    return __c(
        "div",
        {
            style:`min-height:100%;width:100%;max-height:600px;max-width:1000px;background:#0D1117;border-radius:15px;border-bottom-left-radius:unset;border-bottom-right-radius:unset;padding:16px;row-gap:30px;display:${__p(["createAI__sections_main" , "section1"] , true) ? "flex" : "none"};flex-direction:column;overflow:scroll;position:relative;padding-top:30px;`
        },
        [
            __SYD.infoSection({
                text:"What do you want to name your AI?",
                ph:"Name Your Agent ~ (Select a unique name)"
            }),
            __SYD.infoSection_dropDown({
                text:"How should your AI sound?",
                defaultOption:"select a personality",
                otherOptions:["Friendly" , "Professional" , "Funny" , "Neutral"],
                mode:"editPersonality"
            }),
            __SYD.infoSection_dropDown({
                text:"How formal should responses be?",
                defaultOption:"select a response tone",
                otherOptions:["Casual" , "Highly Formal"],
                mode:"editResponseTone"
            }),
            __SYD.infoSection_dropDown({
                text:"Choose AI Expertise",
                defaultOption:"Select an expertise",
                otherOptions:["Basechain Basics" , "Basechain Development" , "Smart Contracts" , "Crypto Trading & DeFi" , "NFTs & Digital Assets" , "Blockchain Security"],
                mode:"editExpertise"
            }),
            __SYD.infoSection_dropDown({
                text:"How detailed should responses be?",
                defaultOption:"Select a response format",
                otherOptions:["Short" , "Medium" , "Long"],
                mode:"editResponseFormat"
            }),
            __SYD.infoSection__radioBox({
                text:"Should your AI ask follow-up questions?"
            }),
            __SYD.pageNav__btn__sec1()
            // __SYD.infoSection(),
            // __SYD.infoSection(),
        ]
    )
}


__SYD.createAi__sections_sec2 = () =>{
    return __c(
        "div",
        {
            style:`min-height:100%;width:100%;max-height:600px;max-width:1000px;background:#0D1117;border-radius:15px;border-bottom-left-radius:unset;border-bottom-right-radius:unset;padding:16px;row-gap:30px;display:${__p(["createAI__sections_main" , "section2"] , false) ? "flex" : "none"};flex-direction:column;overflow:scroll;position:relative;align-items:center;`
        },
        [
            __c(
                "h1",
                {style:`color:#fff;text-align:center;font-family:shine;text-shadow:2px 2px 1px #141414;position:relative;font-size:${__p(["subContainer" , "scaleIntro"] , false) ? "30px" : "35px"}`},
                [
                    'Your ' , __c("span" , {style:"color:#3399FF;text-shadow:2px 2px 1px #141414 , 0 0 1px #000 , 0 0 6px #3399FF;"},["BASEMIND "]) , "AI is Almost Ready 😃!"
                ]
            ),
            __c(
                "p",
                {
                    style:`font-size:${__p(["subContainer" , "scaleIntro"] , false) ? "15px" : "17px"};text-align:center;font-weight:900;line-height:25px;white-space: pre-line;text-shadow:1px 1px 2px #000;`
                },
                [
                    "Customization complete!!"
                ]
            ),
            __c(
                "p",
                {
                    style:`font-size:${__p(["subContainer" , "scaleIntro"] , false) ? "15px" : "17px"};text-align:center;font-weight:900;line-height:25px;white-space: pre-line;text-shadow:1px 1px 2px #000;`
                },
                [
                    "Get BASEMIND wallet and transfer token to save your customised agent"
                ]
            ),
            __SYD.ul_lists_el({child:__SYD.pTag({text:"Get BASEMIND Wallet" , class_:"navClick" , style:"font-size:16px;font-weight:700;background:linear-gradient(to top right , #8A2BE2 , #00FFFF);width:fit-content;padding-left:35px;padding-right:35px;"}) , otherProp:{type:"gen_btn_cred"} , function_:{
                onclick:(e) =>{
                    if(__p(["cred_container" , "walletAdx"],"").length === 0)
                    {
                        e.target.style.pointerEvents = "none"
                        e.target.style.opacity = ".5"
                        __p(["createAi__sections_sec2" , "startAnimation"])();
                        __p(["cred_container" , "un_displayFunc"])();
                        //generate wallet and save customised agents
                        fetch('https://agentb-server.fly.dev/generate_wallet', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            // body: JSON.stringify(__p(['createAI__sections_main','userInfo']))
                        })
                        .then(response => response.json())
                        .then(data =>{
                            console.log('Success:', data);
                            __p(["popUp" , "displayText"])(`wallet Generated and agent saved successfully ..`);
    
                            __p(["createAi__sections_sec2" , "endAnimation"])();
                            __p(["cred_container" , "displayFunc"])();
                            __p(["cred_container" , "updateCred"])(data.address);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            e.target.style.pointerEvents = "none";
                            e.target.style.opacity = "1"
                        });
                    }
                }
            }}),
            __c(
                "div",
                {
                    style:`display:${__p(["createAi__sections_sec2" , "text_animation"],false) ? "block" : "none"}`,
                    class:"text_opacity_animation"
                },
                [
                    __c("p" , {style:"font-family:monospace;"} , ["Please Wait , generating Wallet ..."])
                ]
            ),
            __SYD.cred_container(),
            __c(
                "div",
                {
                    style:`display:${__p(["createAi__sections_sec2" , "text_animation_txn"],false) ? "block" : "none"}`,
                    class:"text_opacity_animation"
                },
                [
                    __c("p" , {style:"font-family:monospace;"} , ["Please Wait , verifying txn hash ..."])
                ],
                {
                    type:"loadTxn"
                }
            ),
            __c(
                "p",
                {
                    style:`color:${__p(['createAi__sections_sec2' , 'txnStateTextMode'],false) ? "red" : "#fff"};display:${__p(['createAi__sections_sec2' , 'text_animation_txn'],false) ? "none" : "block"}`
                },
                [
                    `${__p(['createAi__sections_sec2' , 'txnStateText'],"")}`,
                    !__p(['createAi__sections_sec2' , 'txnStateTextMode'],false) && __p(['createAi__sections_sec2' , 'txnStateText'],"").length > 0 ? __c("p",{},["Agent Saved successFully 🎉🎉🎈"]) : ""
                ]
            ),
            __SYD.pageNav__btn__sec2()
        ],
        {
            createState:{
                stateName:"createAi__sections_sec2",
                state:{
                    text_animation:false,
                    text_animation_txn:false,
                    txnStateText:"",
                    txnStateTextMode:false,

                    startAnimation:() =>{
                        const state = __g("createAi__sections_sec2");
                        state.text_animation = true;
                        __u("createAi__sections_sec2" , {type:"a" , value:state})
                    },
                    endAnimation:() =>{
                        const state = __g("createAi__sections_sec2");
                        state.text_animation = false;
                        __u("createAi__sections_sec2" , {type:"a" , value:state})
                    },
                    startAnimation_txn:() =>{
                        const state = __g("createAi__sections_sec2");
                        state.text_animation_txn = true;
                        __u("createAi__sections_sec2" , {type:"a" , value:state})
                    },
                    endAnimation_txn:() =>{
                        const state = __g("createAi__sections_sec2");
                        state.text_animation_txn = false;
                        __u("createAi__sections_sec2" , {type:"a" , value:state})
                    },
                    updateTxnText:(text , err = false) =>{
                        const state = __g("createAi__sections_sec2");
                        state.txnStateText = text;
                        state.txnStateTextMode = err;
                        __u("createAi__sections_sec2" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}

__SYD.infoSection = ({text = "" , ph = ""} = {}) =>{
    return __c(
        "div",
        {
            style:"padding:20px 16px;background:#2C2F40;display:flex;flex-direction:column;row-gap:10px;border-radius:15px;"
        },
        [
            __c(
                "h2",
                {
                    style:"font-size:20px;color:#3399FF;font-weight:500;text-transform:capitalize;margin-bottom:16px;"
                },
                [
                    `${text}`
                ]
            ),
            __SYD.input_type_text({name:"first name" , type:"text" , ph:ph , w:"500" , size:"16px" , inject:"background:#0D1117;box-shadow:unset;font-family:monospace;height:60px;border:none;border-radius:inherit;" , cls:"launch_btn" , fnc:{oninput:e =>{
                __p(['createAI__sections_main' , 'editName'])(e.target.value)
            }}}),
        ]
    )
}

__SYD.infoSection_dropDown = ({text = "" , defaultOption = "" , otherOptions = [] , mode} = {}) =>{
    const render = () =>{
        const optionsEl = [];

        otherOptions.forEach((val , idx) =>{
            optionsEl.push(
                __c(
                    "option",
                    {
                        value:val,
                        style:"text-transform:capitalize;cursor:pointer;"
                    },
                    [
                        `${val}`
                    ]
                )
            )
        })

        return optionsEl;
    }

    return __c(
        "div",
        {
            style:"padding:20px 16px;background:#2C2F40;display:flex;flex-direction:column;row-gap:10px;border-radius:15px;"
        },
        [
            __c(
                "h2",
                {
                    style:"font-size:20px;color:#3399FF;font-weight:500;text-transform:capitalize;margin-bottom:16px;"
                },
                [
                    `${text}`
                ]
            ),
            __c(
                "select",
                {
                    style:"background:#0D1117;box-shadow:unset;font-family:monospace;height:60px;border:none;border-radius:inherit;font-size:16px;color:#fff;cursor:pointer;",
                },
                [
                    __c(
                        "option",
                        {
                            value:defaultOption,
                            selected:true,
                            disabled:true,
                            style:"text-transform:capitalize;cursor:pointer;opacity:.7;"
                        },
                        [
                            `${defaultOption}`
                        ]
                    ),
                    ...render()
                ],
                {
                    events:{
                        onchange: e =>{
                            __p(["createAI__sections_main" , mode])(e.target.value)
                        }
                    }
                }
            )
        ]
    )
}

__SYD.infoSection__radioBox = ({text = "" , options = ["Yes" , "No"] , ph = ""} = {}) =>{
    return __c(
        "div",
        {
            style:"padding:20px 16px;background:#2C2F40;display:flex;flex-direction:column;row-gap:10px;border-radius:15px;"
        },
        [
            __c(
                "h2",
                {
                    style:"font-size:20px;color:#3399FF;font-weight:500;text-transform:capitalize;margin-bottom:16px;"
                },
                [
                    `${text}`
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;column-gap:10px;width:60px;justify-content:space-between;cursor:pointer;"
                },
                [
                    __c("label" , {style:"color:#fff;font-size:16px;font-weight:500;width:100%;cursor:pointer;" , for:"rad1"} , [`${options[0]}`]),
                    __SYD.input_type_text({id_val:"rad1" , _name:"radio_select" , type:"radio" , ph:ph , w:"500" , size:"16px" , cls:"" , fnc:{onchange:e =>{__p(['createAI__sections_main' , 'editAskQuestion'])("Yes")}}}),
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;column-gap:10px;width:60px;justify-content:space-between;cursor:pointer;"
                },
                [
                    __c("label" , {style:"color:#fff;font-size:16px;font-weight:500;width:100%;cursor:pointer;" , for:"rad2"} , [`${options[1]}`]),
                    __SYD.input_type_text({id_val:"rad2" , _name:"radio_select" , type:"radio" , ph:ph , w:"500" , size:"16px" , cls:"" , fnc:{onchange:e =>{__p(['createAI__sections_main' , 'editAskQuestion'])("No")}}}),
                ]
            ),
        ]
    )
}

__SYD.input_type_text = ({_name = '' , type = 'text' , ph = 'Text Here' , cls = 'thin_border' , w = '500' , size = '16px' , inject = '' , id_val = '' , fnc = {} , otherProps = {} , stateProps = {}} = {}) =>{
    return __c(
        'input',
        {
            type:type,
            placeholder:ph,
            class:cls,
            name:_name,
            id:id_val,
            style:`background:transparent;padding:5px;padding-left:10px;font-weight:${w};font-size:${size};${inject};outline:none;`,
            ...otherProps
        },[],
        {
            ...stateProps,
            events:{
                ...fnc
            }
        }
    )
}