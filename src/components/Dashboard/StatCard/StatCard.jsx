import "./StatCard.css";

function StatCard({
    label,
    value,
    description,
    icon: Icon,
}) {
    return (
        <article className="stat-card">

            <div className="stat-card-top">

                <span className="stat-label">
                    {label}
                </span>

                <span className="stat-icon">
                    <Icon size={16} strokeWidth={1.7} />
                </span>

            </div>


            <div className="stat-value">
                {value}
            </div>


            <div className="stat-description">
                {description}
            </div>

        </article>
    );
}

export default StatCard