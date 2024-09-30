import React from 'react';
import Sample, { SampleProps } from './Sample';

export default {
    title: "Sample",
    component: Sample
};

export const Default = (props: SampleProps) => <Sample {...props} />;
