const LytBooking = ({ children }: { children: JSX.Element[] }) => (
    <div className="lyt__panel">
        <div className="lyt__panel-sidebar">
            { children[0] }
        </div>
        <div className="lyt__panel-content">
            { children[1] }
        </div>
    </div>
);

export default LytBooking;