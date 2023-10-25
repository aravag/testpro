import React from "react";

function StartScene({ onClick}) {
    return (
        <div className="startSceneContainer">
            <div className="startSceneInner">
                <div className="startSceneContent">
                    <div className="startSceneTitle">Добро пожаловать в игру!</div>
                    <div className="startSceneText">
                        Приветствуем, о ученик! Совсем скоро ты окажешься в волшебном мире с определенной целью — что это за цель, ты узнаешь, оказавшись там.
                        <br />
                        Игра построена по принципу визуальной новеллы. Отвечай на вопросы так, как тебе кажется более верным, более соответствующим ситуации и твоим личным выборам в реальной жизни. Как в любой игре, здесь нет правильных и неправильных ответов.
                        <br />
                        Просим тебя отвечать так, как бы ты ответил или поступил в реальности, исходя из своих возможностей и склонностей. Чем ближе к реальности будут твои ответы, тем более достоверный результат ты получишь.
                    </div>
                </div>
                <div className="startSceneClose" onClick={onClick}>
                    <div className="startSceneCloseInner">
                        Начать
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartScene;