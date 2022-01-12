import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { InformationFilled16, ErrorFilled16, Close16 } from '@carbon/icons-react';

export const NotificationTypes = {
  Error: 'ERROR',
  Success: 'SUCCESS',
  Warning: 'WARNING',
  Info: 'INFO',
};

export const stypeMap = {
  [NotificationTypes.Error]: {
    bgCol: 'notification-error-background-color',
    higlight: 'inverse-support-01',
    icon: () => <ErrorFilled16 />,
  },
  [NotificationTypes.Success]: {
    bgCol: 'notification-success-background-color',
    higlight: 'inverse-support-02',
    icon: () => <InformationFilled16 />,
  },

  [NotificationTypes.Warning]: {
    bgCol: 'notification-warning-background-color',
    higlight: 'inverse-support-03',
    icon: () => <InformationFilled16 />,
  },
  [NotificationTypes.Info]: {
    bgCol: 'notification-info-background-color',
    higlight: 'inverse-support-04',
    icon: () => <InformationFilled16 />,
  },
};

const InputWrap = styled.div`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
  }) => css`
    display: flex;
    flex: 1 0 100%;
    position: relative;
    z-index: 1;
  `}
`;

const IconWrapper = styled.span`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
    dismiss,
  }) => css`
    display: inline-flex;
    padding: ${spacing[3]};
    margin: 0;
    z-index: 2;
    color: ${colors['ui-01']};

    ${dismiss
      ? css`
          cursor: pointer;
          color: ${colors['ui-01']} !important;
        `
      : ''}
  `}
`;

const Title = styled.label`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
    inline = false,
  }) => css`
    display: inline-flex;
    font-family: ${font['sans']};
    font-size: ${size['02']};
    font-weight: ${weight['semiBold']};
    line-height: ${size['02']};
    color: ${colors['ui-01']};
    margin-right: ${spacing[1]};
    margin-bottom: ${spacing[1]};
  `}
`;

const Description = styled.span`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
  }) => css`
    display: inline-flex;
    font-family: ${font['sans']};
    font-size: ${size['02']};
    font-weight: ${weight['regular']};
    line-height: ${size['02']};
    color: ${colors['ui-01']};
  `}
`;

const TextWrapper = styled.span`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
    colmn = false,
  }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex: 1 0;
    padding: ${spacing[3]} ${spacing[3]} ${spacing[2]} 0;

    ${colmn
      ? css`
          flex-direction: column;
          padding: ${spacing[3]} ${spacing[3]} ${spacing[3]} 0;
        `
      : css`
          flex-direction: row;
          padding: ${spacing[3]} ${spacing[3]} ${spacing[2]} 0;
        `}
  `}
`;

const NotificationGroup = styled.div`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
    error,
    fluid,
    fixed,
    type,
  }) => css`
    display: flex;
    flex: 1 0 ${fluid ? '100%' : 'auto'};
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    background-color: ${colors[stypeMap[type].bgCol]};
    border: 0.5px solid ${darken(0.25, colors[stypeMap[type].bgCol])};
    border-left: 3px solid ${colors[stypeMap[type].higlight]};

    ${IconWrapper} {
      color: ${colors[stypeMap[type].higlight]};
    }
  `}
`;

export const InlineNotification = forwardRef(
  (
    {
      fluid = false,
      title = false,
      description = false,
      type = NotificationTypes.Info,
      message = false,
      action = null,
      onDismiss = false,
      ...p
    },
    ref
  ) => (
    <NotificationGroup ref={ref} type={type} {...p}>
      <IconWrapper>{stypeMap[type].icon?.() ?? null}</IconWrapper>
      <TextWrapper>
        {title !== false && <Title inline>{title}</Title>}
        {description !== false && <Description>{description}</Description>}
      </TextWrapper>
      {action}
      {onDismiss && (
        <IconWrapper dismiss>
          <Close16 onClick={() => onDismiss?.()} />
        </IconWrapper>
      )}
    </NotificationGroup>
  )
);

const TimeStamp = styled.span`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
  }) => css`
    display: inline-flex;
    font-family: ${font['sans']};
    font-size: ${size['02']};
    font-weight: ${weight['regular']};
    line-height: ${size['02']};
    color: ${colors['ui-01']};
    margin: ${spacing[4]} 0 ${spacing[2]};
  `}
`;

const ToastNotificationGroup = styled.div`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
    error,
    fluid,
    fixed,
    type,
  }) => css`
    position: relative;
    display: flex;
    margin-bottom: ${spacing[2]};
    flex: 1 0 ${fluid ? '100%' : 'auto'};
    width: 18rem;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    background-color: ${colors[stypeMap[type].bgCol]};
    border: 0.5px solid ${darken(0.25, colors[stypeMap[type].bgCol])};
    border-left: 3px solid ${colors[stypeMap[type].higlight]};

    right: -100px;
    opacity: 0;

    animation: 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.1s 1 slide;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @keyframes slide {
      0% {
        right: -100px;
        opacity: 0;
      }
      100% {
        right: 0px;
        opacity: 1;
      }
    }

    ${TextWrapper} {
      flex-wrap: wrap;
    }

    ${Description} {
      max-width: 12rem;
    }
    ${IconWrapper} {
      color: ${colors[stypeMap[type].higlight]};
    }
  `}
`;

export const ToastNotification = forwardRef(
  (
    {
      fluid = false,
      title = false,
      description = false,
      time = false,
      type = NotificationTypes.Info,
      message = false,
      onDismiss = false,
      ...p
    },
    ref
  ) => (
    <ToastNotificationGroup fixed ref={ref} type={type} {...p}>
      <IconWrapper>{stypeMap[type].icon?.() ?? null}</IconWrapper>
      <TextWrapper colmn>
        {title !== false && <Title>{title}</Title>}
        {description !== false && <Description>{description}</Description>}
        {time !== false && <TimeStamp>{time}</TimeStamp>}
      </TextWrapper>
      {onDismiss && (
        <IconWrapper dismiss>
          <Close16 onClick={() => onDismiss?.()} />
        </IconWrapper>
      )}
    </ToastNotificationGroup>
  )
);
