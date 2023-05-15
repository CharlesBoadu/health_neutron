import React from 'react';

const DescriptionComponent = ({ description }) => {
  const parsedDescription = React.useMemo(() => {
    const div = document.createElement('div');
    div.innerHTML = description;
    return div.innerText;
  }, [description]);

  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

export default DescriptionComponent;
