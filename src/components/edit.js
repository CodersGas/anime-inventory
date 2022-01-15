import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hitAPI } from "../helpers/hitAPI";
import Form from "./form";
import { addNotification } from "./addNotification";

const EditAnime = () => {
  const params = useParams();
  const editId = params.editId;

  const [formData, setFormData] = useState(undefined);

  const getFormData = async () => {
    try {
      const response = await hitAPI("GETSINGLE", null, `/get/${editId}`);
      setFormData(response.data);
    } catch (error) {
      addNotification("Error", "Anime you are looking for does not exist", "danger");
      console.log("error in getFormData ", error);
    }
  }

  useEffect(() => {
    getFormData();
  }, []);

  return (
    <Form editData={formData} />
  )
}

export default EditAnime;