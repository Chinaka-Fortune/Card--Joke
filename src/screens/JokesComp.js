import React, { useState, useEffect} from "react";


function JokesComp () {
    
    const fileObject = [
            {
                id: '1',
                setup: "What's the best thing about a Boolean?",
                punchline: "Even if you're wrong, you're only off by a bit"
            },
            {
                id: '2',
                setup: 'Why do programmers wear glasses?',
                punchline: 'Because they need to C#'
            }
        ]

    const [jokes, seJokes] = useState(fileObject)
    // console.log(jokes)
    
    useEffect(() => {
        seJokes(fileObject)
    }, [])
    
    return (
        <div className="divExcercise" style={{ "backgroundColo": "cyan" }} >

            <div className="jokeComponent-card" >
                {
                    jokes.map((joke) => {
                        return (
                            <div style={{ "width": "30%", "backgroundColor": "lightgreen", "border": "1px solid lightgreen", "borderRadius": "10px", "padding": "10px", "textAlign": "center", "margin": "2% auto", "fontSize": "1.5rem" }}>
                                    <h4 style={{ "borderBottom": "1px solid green" }}>{joke.setup}</h4>
                                    <p>{joke.punchline}</p>    
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}



export default JokesComp