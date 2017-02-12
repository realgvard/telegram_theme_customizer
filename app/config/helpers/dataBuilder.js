import baseElements from 'config/elements';


export function getProcessedData(data) {
    let result = [];


    data.forEach(obj => {

        let tempGroup = {};

        tempGroup.id = obj.id;
        tempGroup.collection = [];


        obj.items.forEach(({ tabName, keys }) => {

            let tempSingleItem = {};

            tempSingleItem.tabName = tabName;
            tempSingleItem.elements = [];


            keys.forEach(key => {

                tempSingleItem.elements.push(_.find(baseElements, { key }));
            });

            tempGroup.collection.push(tempSingleItem);
        });

        result.push(tempGroup);
    });

    return result;
}