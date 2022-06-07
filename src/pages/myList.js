import React from "react";
import ChooseUser from "../components/chooseUser";
import Footer from "../components/footer";
import ListAppi from "../components/listAppi";

const MyList = ({ visible, setVisible, createData, db }) => {
  return (
    <main id="main">
      {visible ? (
        <>
          <ChooseUser setVisible={setVisible} />
        </>
      ) : (
        <>
          <h3>Mi lista</h3>
          <section className="my-list">
            <ListAppi db={db} createData={createData} />
          </section>
          <Footer />
        </>
      )}
    </main>
  );
};

export default MyList;
