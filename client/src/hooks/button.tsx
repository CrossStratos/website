'use client'

import React, { useEffect, useState } from 'react';

export default function useButton() {
    const [ buttonCounter, setButtonCounter ]  = useState(0)

    return { buttonCounter, setButtonCounter}
}