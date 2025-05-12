import React, { useEffect, useState } from 'react';

const DayDate = () => {

// Day 1 Format
const dayToday = new Date();
const dayName = dayToday.toLocaleDateString("en-US", {weekday: "long"});
// Date Format
const todayDate = new Date().toLocaleDateString("en-DE").toLocaleLowerCase();

    return (
        <div>
                {dayName}, {todayDate}
        </div>
    );
};

export default DayDate;