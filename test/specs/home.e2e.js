import HomePage from '../pageobjects/home.page.js';

// TST05-HexactaMainPage: Verificar que al menos un resultado de búsqueda coincida con una búsqueda realizada.
// 	Steps:
// 	1. https://www.hexacta.com/
// 	2. Click en el menú superior derecho "Search". Un campo de búsqueda se mostrará en pantalla.
// 	3. Tipear el texto "Outsource". Un conjunto de resultados de búsqueda se mostrará en pantalla.
// 	4. Ver que en alguno de los resultados se encuentre el texto "What not to do when working with an outsourced software team"

async function closeModal(){
    await HomePage.mainModal.waitForDisplayed();

    let isModalOpen = (await HomePage.mainModal.isDisplayed() === true)

    while(isModalOpen === true){
        if(isModalOpen){
            await browser.keys("Escape")
        }
        isModalOpen = (await HomePage.mainModal.isDisplayed() === true)
    }

}
describe('Hexacta Home page', () => {
    it('Verificar que al menos un resultado de búsqueda coincida con una búsqueda realizada', async () => {
        const textToSearch = "Outsource"
        const expectedResult = "What not to do when working with an outsourced software team"

        // 	1. https://www.hexacta.com/
        await HomePage.open()

        // 	2. Click en el menú superior derecho "Search". Un campo de búsqueda se mostrará en pantalla.
        await closeModal()
        const searchMenu = await HomePage.searchMenu
        await searchMenu.waitUntil(async () => (await searchMenu.isClickable() === true ))
        await searchMenu.click()

        // 	3. Tipear el texto "Outsource". Un conjunto de resultados de búsqueda se mostrará en pantalla.
        await HomePage.inputSearch.setValue(textToSearch)
        await browser.keys("Enter");

        // 	4. Ver que en alguno de los resultados se encuentre el texto "What not to do when working with an outsourced software team"
        const articleLinks = await HomePage.articleLinks
        for (let i = 0; i < articleLinks.length; i++) {
            const articleLinkText = await articleLinks[i].getText();

            if(articleLinkText.toLowerCase() == expectedResult.toLowerCase()){
                return true
            }
        }

        fail('Resultado esperado no encontrado')
    });
});
