import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header3 } from '../Typographies'
import {
  CloseButton,
  ContentContainer,
  ModalBackground,
  ModalContainer,
  TitleContainer,
} from './styles'

/**
 * A Modal.
 *
 */
const Modal = ({ children, className, isOpened, onClose, title }) => {
  const [opened, setOpened] = useState(isOpened)

  useEffect(() => {
    setOpened(isOpened)
  }, [isOpened])

  const closeModal = () => {
    onClose && onClose()
    setOpened(false)
  }

  return (
    opened && (
      <ModalBackground className={className} onClick={closeModal}>
        <ModalContainer onClick={e => e.stopPropagation()}>
          <TitleContainer>
            <Header3>{title}</Header3>
            <CloseButton type="button" onClick={closeModal} aria-label="Close Modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </CloseButton>
          </TitleContainer>
          {children && <ContentContainer>{children}</ContentContainer>}
        </ModalContainer>
      </ModalBackground>
    )
  )
}

Modal.defaultProps = {
  children: '',
  className: '',
  isOpened: false,
  onClose: null,
}

Modal.propTypes = {
  /**
   * The content of the Modal.
   */
  children: PropTypes.any,
  /**
   * The classes of the Modal.
   */
  className: PropTypes.string,
  /**
   * Is the modal opened or not.
   */
  isOpened: PropTypes.bool,
  /**
   * Function executed when the Modal is closed.
   */
  onClose: PropTypes.func,
  /**
   * The title of the Modal.
   */
  title: PropTypes.string.isRequired,
}

/** @component */
export default styled(React.memo(Modal))``
