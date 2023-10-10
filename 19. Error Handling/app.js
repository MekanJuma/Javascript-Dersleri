// ! Error Handling

try {
    console.log(users);
} catch (error) {
    console.log("Error boldy:", error.message);
} finally {
    console.log("Finally hemise ishleya");
}

function validateAge(yashy) {
    if (isNaN(yashy)) {
        throw new Error("Yash san bolmaly");
    } else if (yashy < 0) {
        throw new Error("Yashy negative bolyp bilmeya");
    } else if (yashy < 18) {
        throw new Error("Yashy 18 den kichi bolmaly dal");
    }
}

try {
    let yashy = prompt("Yashy girin");
    validateAge(yashy);
} catch (error) {
    console.log("Validation error: ", error.message);
}

// showPlaceEdit
// updatePlacementOnly
// closeAssignmentTimeoutPopup
// checkAssignmentTimer
// snoozeAssignment
// retrieveAssignmentInfo
// releaseAssignment
// addAssignment
// supervisorAssign
// setMultipleDispatch
