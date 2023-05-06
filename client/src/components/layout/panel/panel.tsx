import { CntMainScroll, CntMainStatic } from "../../atomic/container/container";

interface PropsPanel {
    children: JSX.Element[];
}


export const LytHeadPanel = ({ children}: PropsPanel) => (
    <div className="lyt__panel-header">
        <div className="lyt__panel-header_actions">
            {children[0]} 
        </div>
        <div className="lyt__panel-header-profile">
            {children[1]} 
        </div>
    </div>
);
    
export const LytPanelSearch = ({ children}: PropsPanel) => (
    <CntMainScroll>
        <div className="lyt__search">
            <div className="lyt__search_sidebar">
                { children[0] }
            </div>
            <div className="lyt__search_content">
                { children[1] }
            </div>
        </div>
    </CntMainScroll>
);

export const LytPanel = ({ children } : PropsPanel) => (
    <div className="lyt__panel">
        <CntMainStatic>
            { children[0] }
        </CntMainStatic>
        <CntMainScroll>
            { children[1] }
        </CntMainScroll>
    </div>
);


export const LytPanelAdmin = ({ children } : PropsPanel) => (
    <div className="lyt__panel-admin">
        <div className="lyt__panel-admin_head">
            { children[0] }
        </div>
        <div className="lyt__panel-admin_content">
            <div className="lyt__panel-admin_list">
                { children[1] }
            </div>
            <div className="lyt__panel-admin_list">
                { children[2] }
            </div>
        </div>
    </div>
);
