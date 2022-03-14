import axios from "axios";
import { useState, useEffect } from "react";

export const AddHouse = () => {
  const [houses, sethouses] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: "",
  });

  const [getdata, setgetdata] = useState([]);

  const InputHandler = (e) => {
    const { id, value } = e.target;
    sethouses({ ...houses, [id]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", houses).then(() => {
      alert("data submitted");

      details();
    });
  };
  const details = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      var alldata = res.data;
      setgetdata(alldata);
    });
  };
  useEffect(() => {
    details();
  }, []);
  //   const [houses, sethouses] = useState([]);
  //   const InputHandler = (e) => {
  //     const [id, value] = e.target;

  //     setinput({ ...input, [id]: value });
  //   };

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     axios.post("http://localhost:8080/houses", input).then(() => {
  //       alert("data Submitted");
  //     });
  //   };

  //   const alldata = () => {
  //     axios.get("http://localhost:8080/houses").then((res) => {
  //       sethouses(res.data);
  //     });
  //   };

  //   useEffect(() => {
  //     alldata();
  //   }, []);

  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input
          type="text"
          className="name"
          id="name"
          //   value={input}
          required
          onChange={InputHandler}
        />
        <br />
        <label>ownerName</label>
        <input
          //   value={input}
          type="text"
          className="ownerName"
          id="ownerName"
          required
          onChange={InputHandler}
        />
        <br />
        <label>address</label>
        <input
          //   value={input}
          type="text"
          className="address"
          id="address"
          required
          onChange={InputHandler}
        />
        <br />
        <label>areaCode</label>
        <input
          //   value={input}
          type="text"
          className="areaCode"
          id="areaCode"
          required
          onChange={InputHandler}
        />
        <br />
        <label>rent</label>
        <input
          //   value={input}
          type="text"
          className="rent"
          id="rent"
          required
          onChange={InputHandler}
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          value="bachelor"
          type="checkbox"
          className="bachelor"
          id="bachelor"
          onChange={InputHandler}
        />
        <br />
        <label>married</label>
        <input
          value="married"
          type="checkbox"
          className="married"
          id="married"
          onChange={InputHandler}
        />
        <br />
        <label>image</label>
        <input
          //   value={""}
          type="text"
          className="image"
          id="image"
          required
          onChange={InputHandler}
        />
        <br />
        <input className="submitBtn" type="submit" onClick={handlesubmit} />
      </form>
    </div>
  );
};
