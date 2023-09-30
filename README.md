# Marvel API - Dashboard

## Author : Sampanna Pokharel

## How to run

clone the repositry
execute the command 'npm install' (without quotation)
execute the command 'npm start' (without quotation)

## Notes

### Table Component

Could have used antd's table but it had some problems with reponsiveness, thus the code for table is manually created(Components/CharacterTable.tsx)

## Issues

### Profile Page

Although the goal was to display list of all comics and series
related to a character, the API has set limitations of getting
only 100 data, hence only 100 of the lists are rendered (at most)

### Chart Responsiveness

There is some responsiveness to the chart used, but since it is
from an external library (react-chartjs-2), there is little flexibility to play with it.
Chart may behave weirdly in certain sizes.
