import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  width: 450px;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const ContactName = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const ContactNumber = styled.span`
  margin-left: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const DeleteButton = styled.button`
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  margin-left: auto;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.1),
    2px 2px 2px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.primaryText};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
  }
`;
