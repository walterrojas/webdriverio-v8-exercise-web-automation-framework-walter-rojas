

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get mainModal () {
        return $('#boxzilla-overlay-28257')
    }

    get closeModal () {
        return $('span.boxzilla-close-icon')
    }

    get searchMenu () {
        return $('a.searchbox');
    }

    get inputSearch(){
        return $('#search-field')
    }

    get articleLinks(){
        return $$('article.display-flex div > h3 > a')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new HomePage();
