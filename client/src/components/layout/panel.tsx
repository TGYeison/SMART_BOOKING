import { CntMainScroll, CntMainStatic } from "../atomic/container/container";


const LytPanel = ({ children }: { children: JSX.Element[] }) => (
    <div className="lyt__panel">
        <CntMainStatic>
            { children[0] }
        </CntMainStatic>
        <CntMainScroll>
            { children[1] }
        </CntMainScroll>
    </div>
);

export default LytPanel;