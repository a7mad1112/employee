import React from 'react'
import DetailsSection from '../../component/detailsSection/DetailsSection'
import CreateCitizenForm from './../../component/create-citizen-form/CreateCitizenForm';
import { useSelector } from 'react-redux';
import DeleteCitizenForm from '../../component/delete-citizen-form/DeleteCitizenForm';
import UpdateCitizenForm from '../../component/update-citizen-form/UpdateCitizenForm';
const Home = () => {
  const createIsShow = useSelector(state => state.createCitizenUI.createCitizenIsVisible)
  const deleteIsShow = useSelector(state => state.deleteCitizenUI.deleteCitizenIsVisible)
  const updateIsShow = useSelector(state => state.updateCitizenUI.updateCitizenIsVisible)

  return (
    <>
      {
        createIsShow ? <CreateCitizenForm/> : null
      }
      {
        deleteIsShow ? <DeleteCitizenForm/> : null
      }
      {
        updateIsShow ? <UpdateCitizenForm/> : null
      }
      <DetailsSection/>
    </>
  )
}

export default Home