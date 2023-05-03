import { ButtonForm, InputForm } from "../../../Auth";
import { photoUser } from "../../../../assets";
import { useCreateGroup } from "../../hook";

import styles from "./createGroup.module.css";

export const CreateGroup = ({ setOpenCreateGroup, infoUserActive }) => {
  const {
    // Atributos
    formSubmitted,
    friendsListCurrentUser,
    nameGroup,
    selectedUsers,
    startLoading,

    // Metodos
    onCheckUser,
    onCreateGroup,
    setNameGroup,
  } = useCreateGroup({ infoUserActive, setOpenCreateGroup });

  return (
    <div className={styles.create_group__container}>
      <div className={styles.create_group__content}>
        <div className={styles.create_group__nav}>
          <p>Crear grupo</p>
          <button
            className={styles.create_group__btn_close}
            disabled={startLoading}
            onClick={() => setOpenCreateGroup(false)}
          >
            X
          </button>
        </div>

        <div className={styles.create_group__name_group}>
          <InputForm
            errorActive={nameGroup.trim().length <= 4 && formSubmitted}
            onChange={({ target }) => setNameGroup(target.value)}
            placeholder="Nombre del grupo..."
            styleIcon="fa-solid fa-users-rays"
            textError="El nombre del grupo es demasiado corto"
            value={nameGroup}
          />
        </div>

        <ul className={styles.create_group__list_users}>
          {selectedUsers.length <= 2 && formSubmitted && (
            <p style={{ color: "red" }}>
              Debes de seleccionar por lo menos dos amigos
            </p>
          )}

          {friendsListCurrentUser.map((userFriend) => (
            <li className={styles.create_group__li_user} key={userFriend.uid}>
              <figure className={styles.create_group__photo_user}>
                <img
                  src={userFriend.photoUrl || photoUser}
                  alt="Foto de perfil"
                />
                <i className="fa-solid fa-circle"></i>
                <figcaption>{userFriend.displayName}</figcaption>
              </figure>

              <input
                className={styles.create_group__checkbox}
                id={userFriend.uid}
                name={userFriend.displayName}
                onChange={onCheckUser}
                type="checkbox"
              />
            </li>
          ))}
        </ul>

        <div className={styles.create_group__content_buttons}>
          <ButtonForm
            disabled={startLoading}
            onSubmit={onCreateGroup}
            title={startLoading ? "Creando..." : "Crear grupo"}
          />
        </div>
      </div>
    </div>
  );
};
