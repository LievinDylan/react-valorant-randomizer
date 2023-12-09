import TeamItem from '../../components/TeamItem/TeamItem';

function Team() {
  return (
    <div className="flex flex-grow h-full">
      <section className="w-1/2 bg-blue-500">
        <TeamItem />
      </section>
      <section className="w-1/2 bg-red-500">
        <TeamItem />
      </section>
    </div>
  );
}

export default Team;
