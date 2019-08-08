const updateObject = (oldObject, updateValues) => {
    return {
        ...oldObject,
        ...updateValues
    };
};

export default updateObject;
