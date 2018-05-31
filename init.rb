require 'redmine'

Redmine::Plugin.register :select_to_select2 do
  name 'Select To Select2 Plugin'
  author 'André Cardoso <acardoso@orupaca.fr>'
  description 'Replace Select Tag to Select2'
  version '0.1.0'
  url 'https://github.com/arlin2050/select_to_select2'
  author_url 'https://github.com/arlin2050'
end

class SelectToSelect2ViewListener < Redmine::Hook::ViewListener

  # Adds javascript and stylesheet tags
  def view_layouts_base_html_head(context)
      javascript_include_tag('select2.js', :plugin => :select_to_select2) +
      stylesheet_link_tag('select2.css', :plugin => :select_to_select2) +
      javascript_include_tag('select2.main.js', :plugin => :select_to_select2) +
      stylesheet_link_tag('select2.main.css', :plugin => :select_to_select2) +
      stylesheet_link_tag('select2.redmine_crm.css', :plugin => :select_to_select2)
  end
  
end

