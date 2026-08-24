
export default function Events_Example() {

    // This function is used to capture the event and do the task when it is called
    const Handler_Function = () => {
        console.log("Event handled")
    }

    return (
        <div className="">

            <div>This is the Example of Event Handling</div>

            <br />
            <br />
            <br />

            {/* Click Event */}
            <button onClick={Handler_Function}>On Click Event - Button</button>

            <br />
            <br />

            {/* Mouse Event */}
            <button onMouseEnter={Handler_Function}>On Mouse Enter Event - Button</button>

            <br />
            <br />

            {/* Context Menu */}
            <button onContextMenu={Handler_Function}>On Context Menu Event - Button</button>

        </div>
    )
}
