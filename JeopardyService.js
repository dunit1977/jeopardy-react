import React, {useState} from 'react';

function JeopardyService() {
    const [data, setData] = useState(null);

    function handleClick() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://jservice.io/api/random');
        xhr.onreadystatechange = function() {
            if (xhr.status === 200 && this.readyState === 4) {
                setData(JSON.parse(xhr.responseText));
            }
        };
        console.log(data);

        xhr.send();
    }

    // const handleClick = () => {
    //     fetch('http://jservice.io/api/random').then(response => {
    //         return response.json();
    //     })
    //         .then(responseData => {
    //             console.log(responseData);
    //             setData(responseData.question)
    //         });
    // };

    // const getData = () => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'http://jservice.io/api/random');
    //
    //     xhr.responseType = 'json';
    //
    //     xhr.onload = () => {
    //         const data = xhr.response;
    //         console.log(data);
    //     };
    //     xhr.send();
    // }

    return (
        <div>
            <button onClick={handleClick}>Get trivia clue</button>
            {data ? <div>{JSON.stringify(data)}</div> : <div></div>}
            {/*{data ? <div>{(data)}</div> : <div>Loading...</div>}*/}
        </div>
    );

}
export default JeopardyService;

