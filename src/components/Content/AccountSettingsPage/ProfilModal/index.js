import './style.scss';
import { useDispatch } from 'react-redux';
import { updateinfoUser } from 'src/actions';
import Field from './Field';


// == Composant
const ProfilModal = ({
  handleUpdateInfo, email, password, changeField, picture, pseudo, profile,
}) => {

  const dispatch = useDispatch();
  
  const modal = () => {
    const buttonValidate = document.querySelector('.view');
    buttonValidate.classList.add('hideView');
  };
  const handleViewModal = (evt) => {
    evt.preventDefault();
    modal();
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateInfo();
    dispatch(updateinfoUser());
    modal();
  };

  return (
    <div className="view">
      <div className="profil-modal">
        <div className="close">
          <button className="closeSettings" type="button" onClick={handleViewModal}><i className="fas fa-times" /></button>
        </div>

        <h1 className="profil-modal__title">Modifier son profil</h1>

        <p className="profil-modal__description">Vous pouvez ici, modifier vos informations personnelles</p>

        <form className="profil-modal__form" action="/settings" onSubmit={handleSubmit}>

          <div className="profil-modal__form__avatar">

            <img className="profil-modal__form__avatar--img" src={profile} alt="Photo de profil" />


            <Field value={picture} htmlFor="file-upload" accept=".jpg, .png, .jpeg" onChange={changeField} name="profile_picture" type="file" />
          </div>
          <Field value={pseudo} onChange={changeField} name="pseudo" type="pseudo" />
          <Field value={email} onChange={changeField} name="email" type="email" />
          <Field value={password} onChange={changeField} name="password" type="password" />
          <Field value={password} onChange={changeField} name="password" type="password" />

          <button className="profil-modal__form--submit" type="submit" value="Envoyer">Valider</button>

        </form>

      </div>
    </div>
  );
};

// == Export
export default ProfilModal;
