import React, {useState} from 'react';

function JeopardyPlayerResponse() {

    return (
        <form>
            <div>
                <label htmlFor="example">Submit the response to the clue in form of a question What is/Who is </label>
                <input id="example" type="text" name="text"/>
            </div>
            <div>
                <input type="submit" value="Send"/>
            </div>
        </form>
    );

}
export default JeopardyPlayerResponse;
