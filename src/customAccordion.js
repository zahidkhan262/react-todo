import React, { useState, useEffect } from "react";
function CustomAccordion({
    accordion,
    ...rest
}) {

    const [accordionComponents, setAccordionComponents] = useState([]);
    const [accordionActiveClass, setAccordionActiveClass] = useState(false);


    useEffect(() => {
        if (accordion.length) {
            const tabs = accordion.map((acc) => {
                return {
                    ...acc
                }
            })
            setAccordionComponents(tabs)
        }
    }, []);

    const handleAccordionToggle = (index) => {
        const updatedTabs = accordionComponents.map((acc, i) => {
            if (i === index) {
                return {
                    ...acc,
                    active: !acc.expanded,
                    expanded: !acc.expanded
                }
            }
            return {
                ...acc,
                active: false,
                expanded: false
            }
        })

        setAccordionComponents(updatedTabs)
    }

    return (
        <>
            {accordionComponents && accordionComponents.map((acc, key) => (
                <div key={key} onClick={() => handleAccordionToggle(key)} className="mb-3 border-accordion">
                    <div className={acc.active ? "d-flex  active" : "d-flex"}>
                        <a>
                            {acc.title}
                        </a>
                    </div>
                    {(acc.expanded) ? acc.content : <></>}
                </div>
            ))}

        </>

    )
}

CustomAccordion.defaultProps = {
    icon: false
}

export default CustomAccordion;

<div>
    <CustomAccordion
        accordion={[
            {
                title: tab1,
                expanded: false,
                content: (<govP selectedState={[...lifeArray].find(state => state.Value === selectedState.Value)} />)
            },
            {
                title: tab2,
                expanded: false,
                content: (<house selectedState={[...lifeArray].find(state => state.Value === selectedState.Value)} />)
            }
        ]} />
</div>
