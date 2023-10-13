export const getDataNeko = async() => {
    try {
        const dataNeko = await fetch ('https://nekos.best/api/v2/dance?amount=10').then(res => res.json());
        return dataNeko.results
    } catch (error) {
        console.log(error);
    }
}

export const getDataRick = async() => {
    try {
        const dataRick = await fetch ('https://rickandmortyapi.com/api/character').then(res => res.json());
        return dataRick.results
    } catch (error) {
        console.log(error);
    }
}