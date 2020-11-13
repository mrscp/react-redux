export const selectUser = (user) => {
    console.log("You have selected: " + user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};
