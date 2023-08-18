import React from 'react';
import BaseBox from '~components/Box/BaseBox';
import { Tag } from './Tag';
import { AnimatedTagProps } from './types';

const AnimatedTag = ({
  children,
  currentTagIndex,
  activeTagIndex,
  onDismiss,
  tagsLength,
}: AnimatedTagProps) => {
  return (
    <BaseBox>
      <Tag
        _isVirtuallyFocussed={currentTagIndex === activeTagIndex}
        _isTagInsideInput={true}
        onDismiss={() => {
          onDismiss({ tagIndex: currentTagIndex, tagName: children });
        }}
        marginRight="spacing.3"
        marginY="spacing.2"
      >
        {children}
      </Tag>
    </BaseBox>
  );
};

export { AnimatedTag };
