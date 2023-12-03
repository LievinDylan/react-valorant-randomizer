import React, { useEffect, useState } from 'react';
import useWeaponsStore from '../../zustand/weapons';
import { WeaponItem } from '../../@types/weapon.d';

function WeaponList() {
  const [allWeapons, setAllWeapons] = useState<WeaponItem[]>([]);
  const [randomWeapon, setRandomWeapon] = useState<WeaponItem[]>([]);

  const { data, fetchData } = useWeaponsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (allWeapons.length > 0) return;
    const weapons = data.filter(
      (weapon: WeaponItem) =>
        weapon.displayName !== 'Melee' && weapon.displayName !== 'Classic'
    );
    setAllWeapons(weapons);
  }, [data, allWeapons]);

  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * allWeapons.length);
    setRandomWeapon([allWeapons[randomIndex]]);
  };

  const handleMoreRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * allWeapons.length);
    let randomIndexTwo = Math.floor(Math.random() * allWeapons.length);
    if (randomIndexTwo === randomIndex) {
      randomIndexTwo = Math.floor(Math.random() * allWeapons.length);
    }
    let randomIndexThree = Math.floor(Math.random() * allWeapons.length);
    if (
      randomIndexThree === randomIndex ||
      randomIndexThree === randomIndexTwo
    ) {
      randomIndexThree = Math.floor(Math.random() * allWeapons.length);
    }
    setRandomWeapon([
      allWeapons[randomIndex],
      allWeapons[randomIndexTwo],
      allWeapons[randomIndexThree],
    ]);
  };

  const handleEqualSelect = () => {
    const RiflesWeapons = allWeapons.filter(
      (weapon) => weapon.category === 'EEquippableCategory::Rifle'
    );
    const randomIndex = Math.floor(Math.random() * RiflesWeapons.length);

    const SMGWeapons = allWeapons.filter(
      (weapon) => weapon.category === 'EEquippableCategory::SMG'
    );
    const randomIndexTwo = Math.floor(Math.random() * SMGWeapons.length);

    const HeavyWeapons = allWeapons.filter(
      (weapon) => weapon.category === 'EEquippableCategory::Heavy'
    );
    const randomIndexThree = Math.floor(Math.random() * HeavyWeapons.length);

    const SniperWeapons = allWeapons.filter(
      (weapon) => weapon.category === 'EEquippableCategory::Sniper'
    );
    const randomIndexFour = Math.floor(Math.random() * SniperWeapons.length);

    const ShotgunWeapons = allWeapons.filter(
      (weapon) => weapon.category === 'EEquippableCategory::Shotgun'
    );
    const randomIndexFive = Math.floor(Math.random() * ShotgunWeapons.length);

    const SidearmWeapons = allWeapons.filter(
      (weapon) => weapon.category === 'EEquippableCategory::Sidearm'
    );
    const randomIndexSix = Math.floor(Math.random() * SidearmWeapons.length);

    setRandomWeapon([
      RiflesWeapons[randomIndex],
      SMGWeapons[randomIndexTwo],
      HeavyWeapons[randomIndexThree],
      SniperWeapons[randomIndexFour],
      ShotgunWeapons[randomIndexFive],
      SidearmWeapons[randomIndexSix],
    ]);
  };

  const weaponsList = randomWeapon.map((weapon: WeaponItem) => (
    <li key={weapon.uuid}>
      <img
        className="w-2/5 h-auto"
        src={weapon.displayIcon}
        alt={`a full portrait of ${weapon.displayName}`}
      />
      <h4>{weapon.displayName}</h4>
    </li>
  ));

  return (
    <>
      <button type="button" className="btn" onClick={handleMoreRandomSelect}>
        Randomizer 3 weapons
      </button>
      <button type="button" className="btn" onClick={handleRandomSelect}>
        Randomizer 1 weapon
      </button>
      <button type="button" className="btn" onClick={handleEqualSelect}>
        Equal
      </button>
      <div>{weaponsList}</div>
    </>
  );
}

export default WeaponList;