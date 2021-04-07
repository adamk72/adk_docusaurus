import React from 'react'
import clsx from 'clsx';

import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';
function BareTabContent({ title, imageUrl, children, wip }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx(styles.bareTabItem)}>
            <div className="card">
                <div className="card__header">
                    <h3>{title}</h3>
                </div>
                <div className="card__body">
                    {children}
                </div>
                <div className="card__footer">
                    {wip && <span className="badge badge--info">Work in Progress</span>}
                </div>
            </div>
        </div>
    );
}

export default BareTabContent