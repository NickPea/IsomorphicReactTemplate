//

import React from "react";
import reactDomServer from "react-dom/server";
import IsoApp from '../../iso-app/app';
import htmlTemplate from './html-template'

export default class {
	//

	static renderAppToHtml(url: string) {

        //render react components to string
        const appRender = reactDomServer.renderToString(<IsoApp url={url} />)

        //wrap render in html
        const htmlRender = htmlTemplate(appRender);

        return htmlRender;

    }
}
