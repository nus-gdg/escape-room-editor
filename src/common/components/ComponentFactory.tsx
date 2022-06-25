import React from "react";

interface ComponentFactoryProps {
    components: Record<string, React.FC>,
    type: string,
}

const ComponentFactory: React.FC<ComponentFactoryProps> = ({components, type, ...props}) => {
    const Component = components[type];
    return (
        <Component {...props}/>
    );
};

export default React.memo(ComponentFactory);
